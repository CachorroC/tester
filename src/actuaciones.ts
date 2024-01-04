import { PrismaClient } from '@prisma/client';
import { ConsultaActuacion } from './types/actuaciones.js';
import * as fs from 'fs/promises';


export interface intActuacion {
  idRegActuacion: number;
  llaveProceso: string;
  consActuacion: number;
  fechaActuacion: Date;
  actuacion: string;
  anotacion: null | string;
  fechaInicial: Date | null;
  carpetaNumero: number | null;
  createdAt: Date;
  fechaFinal: Date | null;
  fechaRegistro: Date;
  codRegla: string;
  conDocumentos: boolean;
  cant: number;
}

export interface outActuacion extends intActuacion {
  createdAt: Date;
  idProceso: number;
  isUltimaAct: boolean;
}

const prisma = new PrismaClient();

async function fetcher (
  idProceso: number
) {
  try {

    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
    );

    if ( !request.ok ) {
      throw new Error(
        `${ idProceso }: ${ request.status } ${ request.statusText }${ JSON.stringify(
          request,
          null,
          2,
        ) }`,
      );
    }

    const json = ( await request.json() ) as ConsultaActuacion;

    const {
      actuaciones
    } = json;

    return actuaciones.map(
      (
        actuacion
      ) => {
        return {
          ...actuacion,
          fechaActuacion: new Date(
            actuacion.fechaActuacion
          ),
          fechaRegistro: new Date(
            actuacion.fechaRegistro
          ),
          fechaInicial: actuacion.fechaInicial
            ? new Date(
              actuacion.fechaInicial
            )
            : null,
          fechaFinal: actuacion.fechaFinal
            ? new Date(
              actuacion.fechaFinal
            )
            : null,
          isUltimaAct: actuacion.cant === actuacion.consActuacion
            ? true
            : false,
          idProceso: idProceso
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

async function getIdProcesos () {
  const carpetas = await prisma.carpeta.findMany();
  return carpetas.flatMap(
    (
      carpeta
    ) => {
      return carpeta.idProcesos;
    }
  );
}

async function* AsyncGenerateActuaciones (
  idProcesos: number[]
) {
  for ( const idProceso of idProcesos ) {
    const indexOf = idProcesos.indexOf(
      idProceso
    );
    console.log(
      indexOf
    );

    const fetcherIdProceso = await  fetcher(
      idProceso
    );


    const [ ultimaActuacion ] = fetcherIdProceso;
    await prismaUpdaterActuaciones(
      ultimaActuacion
    );
    await prisma.actuacion.createMany(
      {
        data          : fetcherIdProceso,
        skipDuplicates: true
      }
    );
    yield fetcherIdProceso;
  }
}

async function prismaUpdaterActuaciones (
  ultimaActuacion: outActuacion
) {
  try {
    const carpeta =  await prisma.carpeta.findFirstOrThrow(
      {
        where: {
          llaveProceso: ultimaActuacion.llaveProceso
        }
      }
    );

    const incomingDate = new Date(
      ultimaActuacion.fechaActuacion
    )
      .getTime();

    const savedDate = carpeta.fecha
      ?  new Date(
        carpeta.fecha
      )
        .getTime()
      : null ;

    if ( !savedDate || savedDate < incomingDate ) {
      await prisma.carpeta.update(
        {
          where: {
            numero: carpeta.numero
          },
          data: {
            fecha: new Date(
              ultimaActuacion.fechaActuacion
            ),
            revisado       : false,
            ultimaActuacion: {
              connectOrCreate: {
                where: {
                  idRegActuacion: ultimaActuacion.idRegActuacion
                },
                create: {
                  ...ultimaActuacion
                }
              }
            }
          }
        }
      );
    }



  } catch ( error ) {
    console.log(
      error
    );
  }
}

async function main () {
  const ActsMap = [];

  const idProcesos = await getIdProcesos();
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
  await fs.mkdir(
    `./src/date/${ new Date()
      .toLocaleDateString() }`, {
      recursive: true
    }
  );

  fs.writeFile(
    `./src/date/${ new Date()
      .toLocaleDateString() }/${ new Date()
      .toString() }.json`, JSON.stringify(
      {
        date       : new Date(),
        actuaciones: ActsMap
      },
    ), {

    }
  );
  return ActsMap;
}

const mainer = main();


console.log(
  mainer
);