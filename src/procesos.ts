import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';
import { ConsultaNumeroRadicacion } from './types/procesos';
import { NewJuzgado } from './models/demanda';
import { Juzgado } from './types/carpetas';

export interface intProceso {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso: Date | null;
  fechaUltimaActuacion: Date | null;
  despacho: string;
  departamento: string;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
}

export interface outProceso extends intProceso {
  fechaProceso: Date | null;
  fechaUltimaActuacion: Date | null;
  juzgado: Juzgado;
}

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
      return carpeta.llaveProceso;
    } 
  );
}

async function* AsyncGenerateActuaciones(
  llaves: string[] 
) {
  for ( const llaveProceso of llaves ) {
    const indexOf = llaves.indexOf(
      llaveProceso 
    );
    console.log(
      indexOf 
    );

    const fetcherIdProceso = await fetcher(
      llaveProceso 
    );

    for ( const proceso of fetcherIdProceso ) {
      if ( !proceso.esPrivado ) {
        await prismaUpdaterProcesos(
          proceso 
        );
      }
    }

    yield fetcherIdProceso;
  }
}

async function prismaUpdaterProcesos(
  proceso: outProceso 
) {
  const idProcesosSet = new Set<number>();

  try {
    const carpeta = await prisma.carpeta.findFirstOrThrow(
      {
        where: {
          llaveProceso: proceso.llaveProceso,
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
          numero: carpeta.numero,
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
    /*     await fs.mkdir(
      `./src/date/${ new Date()
        .getFullYear() }/${ new Date()
        .getMonth() }/${ new Date()
        .getDate() }`, {
        recursive: true,
      }
    );

    fs.writeFile(
      `./src/date/${ new Date()
        .getFullYear() }/${ new Date()
        .getMonth() }/${ new Date()
        .getDate() }/${
        proceso.idProceso
      }.json`,
      JSON.stringify(
        {
          date   : new Date(),
          proceso: proceso
        }
      ),
    );
 */
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

const mainer = main();

console.log(
  mainer 
);
