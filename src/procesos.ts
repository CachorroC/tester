import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';
import { ConsultaNumeroRadicacion, outProceso } from './types/procesos';
import { NewJuzgado } from './models/juzgado';
import { ClassProcesos } from './models/procesos';


const prisma = new PrismaClient();

async function fetcher(
  llaveProceso: string
): Promise<outProceso[]> {
  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false&pagina=1`,
    );

    if ( !request.ok ) {
      throw new Error(
        `${ llaveProceso }: ${ request.status } ${
          request.statusText
        }${ JSON.stringify(
          request, null, 2
        ) }`,
      );
    }

    const json = ( await request.json() ) as ConsultaNumeroRadicacion;

    const {
      procesos
    } = json;

    return procesos.map(
      (
        proceso
      ) => {
        return {
          ...proceso,
          fechaProceso: proceso.fechaProceso
            ? new Date(
              proceso.fechaProceso
            )
            : null,
          fechaUltimaActuacion: proceso.fechaUltimaActuacion
            ? new Date(
              proceso.fechaUltimaActuacion
            )
            : null,
          juzgado: new NewJuzgado(
            proceso
          ),
        };
      }
    );
  } catch ( error ) {
    console.log(
      error
    );
    return [];
  }
}

async function getLLaves() {
  const carpetas = await prisma.carpeta.findMany();
  return carpetas.flatMap(
    (
      carpeta
    ) => {
      return {
        llaveProceso: carpeta.llaveProceso.trim(),
        numero      : carpeta.numero
      };
    }
  );
}

async function* AsyncGenerateActuaciones(
  llaves: { llaveProceso: string;  numero: number}[]
) {
  for ( const carpeta of llaves ) {
    const indexOf = llaves.indexOf(
      carpeta
    );
    console.log(
      indexOf
    );

    const newProceso = await ClassProcesos.getProcesos(
      carpeta.llaveProceso
      , carpeta.numero
    );

    const fetcherIdProceso = await fetcher(
      carpeta.llaveProceso
    );

    console.log(
      newProceso.prismaUpdateProcesos()
    );

    for ( const proceso of fetcherIdProceso ) {
      if ( !proceso.esPrivado ) {
        await prismaUpdaterProcesos(
          proceso, carpeta.numero
        );
      }
    }

    yield newProceso;
  }
}

async function prismaUpdaterProcesos(
  proceso: outProceso, numero: number
) {
  const idProcesosSet = new Set<number>();

  try {
    const carpeta = await prisma.carpeta.findFirstOrThrow(
      {
        where: {
          numero: numero
        },
      }
    );
    carpeta.idProcesos.forEach(
      (
        idProceso
      ) => {
        idProcesosSet.add(
          idProceso
        );
      }
    );

    idProcesosSet.add(
      proceso.idProceso
    );

    const updater = await prisma.carpeta.update(
      {
        where: {
          numero: numero,
        },
        data: {
          idProcesos: {
            set: Array.from(
              idProcesosSet
            ),
          },
          procesos: {
            connectOrCreate: {
              where: {
                idProceso: proceso.idProceso,
              },
              create: {
                ...proceso,
                juzgado: {
                  connectOrCreate: {
                    where: {
                      tipo: proceso.juzgado.tipo,
                    },
                    create: proceso.juzgado,
                  },
                },
              },
            },
          },
        },
      }
    );
    console.log(
      updater
    );

  } catch ( error ) {
    console.log(
      error
    );
  }
}

async function main() {
  const ActsMap = [];

  const idProcesos = await getLLaves();
  console.log(
    idProcesos
  );

  for await ( const actuacionesJson of AsyncGenerateActuaciones(
    idProcesos
  ) ) {
    console.log(
      actuacionesJson
    );
    ActsMap.push(
      actuacionesJson
    );
  }

  fs.writeFile(
    'actuacionesOutput.json', JSON.stringify(
      ActsMap
    )
  );
  return ActsMap;
}

main();