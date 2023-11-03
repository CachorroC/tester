
import * as fs from 'fs/promises';
import Carpetas from './src/data/carpetas';
import { CarpetaJudicial } from './src/models/thenable';
import { categoryAssignment } from './src/models/categories';
import {  Prisma, PrismaClient, } from '@prisma/client';

//NOTE 1: Define a type that includes the relation to `Post`
const userWithPosts = Prisma.validator<Prisma.CarpetaDefaultArgs>()(
  {
    include: {
      procesos: true,
    },
  }
);

//NOTE 2: Define a type that only contains a subset of the scalar fields
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userPersonalData = Prisma.validator<Prisma.CarpetaDefaultArgs>()(
  {
    select: {
      llaveProceso: true,
      nombre      : true
    },
  }
);

//NOTE 3: This type will include a user and all their posts
export type CarpetaWithPosts = Prisma.CarpetaGetPayload<typeof userWithPosts>

const prisma = new PrismaClient();


async function f () {
  const newCarpetasMap = new Map<number, CarpetaJudicial>();

  for ( const rawCarpeta of Carpetas ) {


    const carpeta
      = categoryAssignment(
        rawCarpeta
      );

    const thener = new CarpetaJudicial(
      carpeta
    );
    console.log(
      thener.createCarpeta()
    );

    for ( const key in thener ) {
      if ( Object.prototype.hasOwnProperty.call(
        thener, key
      ) ) {
        const element = thener[ key ];
        console.log(
          element
        );
        console.log(
          `${ key }: ${ thener[ key ] }`
        );
      }
    }

    console.log(
      thener.hasKey()
    );

    const withProcesos = await thener.consultaProcesos();
    console.log(
      JSON.stringify(
        withProcesos, null, 2
      )
    );

    if ( !withProcesos.procesos || withProcesos.procesos.length === 0 ) {
      newCarpetasMap.set(
        carpeta.numero, thener
      );
      continue;
    }

    const withActuaciones = await thener.consultaActuaciones();
    console.log(
      JSON.stringify(
        withActuaciones, null, 2
      )
    );

    if ( !withActuaciones.actuaciones || withActuaciones.actuaciones.length === 0 ) {
      newCarpetasMap.set(
        carpeta.numero, thener
      );
      continue;
    }

    newCarpetasMap.set(
      carpeta.numero, thener
    );

    continue;
  }

  const resultArray = Array.from(
    newCarpetasMap.values()
  );

  fs.writeFile(
    'provisionalCarpetas.json', JSON.stringify(
      resultArray, null, 2
    )
  );
  console.log(
    JSON.stringify(
      resultArray, null, 2
    )
  );
  return resultArray;
}

async function inserterCarpetas () {
  const carpetas =  await f();

  for ( const carpeta of carpetas ) {
    let newCarpeta: Prisma.CarpetaCreateInput;

    if ( carpeta.llaveProceso === null ) {
      newCarpeta = {
        numero                 : carpeta.numero,
        nombre                 : carpeta.nombre,
        capitalAdeudado        : carpeta.demanda.capitalAdeudado,
        etapaProcesal          : carpeta.demanda.etapaProcesal,
        fechaPresentacion      : carpeta.demanda.fechaPresentacion,
        entregaGarantiasAbogado: carpeta.demanda.entregaGarantiasAbogado,
        vencimientoPagare      : carpeta.demanda.vencimientoPagare,
        category               : carpeta.category,
        deudor                 : JSON.stringify(
          carpeta.deudor
        ),
        demanda: JSON.stringify(
          carpeta.demanda
        ),

        obligaciones: carpeta.demanda.obligacion.map(
          (
            o
          ) => {
            return String(
              o
            );
          }
        ),

      };
    } else if ( ! carpeta.procesos || carpeta.procesos.length === 0 ) {
      newCarpeta = {
        numero      : carpeta.numero,
        nombre      : carpeta.nombre,
        llaveProceso: carpeta.llaveProceso,
        idProcesos  : carpeta.idProcesos
          ? carpeta.idProcesos
          : [],
        capitalAdeudado        : carpeta.demanda.capitalAdeudado,
        etapaProcesal          : carpeta.demanda.etapaProcesal,
        fechaPresentacion      : carpeta.demanda.fechaPresentacion,
        entregaGarantiasAbogado: carpeta.demanda.entregaGarantiasAbogado,
        vencimientoPagare      : carpeta.demanda.vencimientoPagare,
        category               : carpeta.category,
        deudor                 : JSON.stringify(
          carpeta.deudor
        ),
        demanda: JSON.stringify(
          carpeta.demanda
        ),

        obligaciones: carpeta.demanda.obligacion.map(
          (
            o
          ) => {
            return String(
              o
            );
          }
        ),

      };
    } else if ( !carpeta.actuaciones || carpeta.actuaciones.length === 0 ) {
      newCarpeta = {
        numero      : carpeta.numero,
        nombre      : carpeta.nombre,
        llaveProceso: carpeta.llaveProceso,
        idProcesos  : carpeta.idProcesos
          ?carpeta.idProcesos
          : [],
        capitalAdeudado        : carpeta.demanda.capitalAdeudado,
        etapaProcesal          : carpeta.demanda.etapaProcesal,
        fechaPresentacion      : carpeta.demanda.fechaPresentacion,
        entregaGarantiasAbogado: carpeta.demanda.entregaGarantiasAbogado,
        vencimientoPagare      : carpeta.demanda.vencimientoPagare,
        category               : carpeta.category,
        deudor                 : JSON.stringify(
          carpeta.deudor
        ),
        demanda: JSON.stringify(
          carpeta.demanda
        ),
        procesos: {
          createMany: {
            data: carpeta.procesos
          }
        },
        obligaciones: carpeta.demanda.obligacion.map(
          (
            o
          ) => {
            return String(
              o
            );
          }
        ),

      };
    } else {
      newCarpeta = {
        numero                 : carpeta.numero,
        nombre                 : carpeta.nombre,
        llaveProceso           : carpeta.llaveProceso,
        capitalAdeudado        : carpeta.demanda.capitalAdeudado,
        etapaProcesal          : carpeta.demanda.etapaProcesal,
        fechaPresentacion      : carpeta.demanda.fechaPresentacion,
        entregaGarantiasAbogado: carpeta.demanda.entregaGarantiasAbogado,
        vencimientoPagare      : carpeta.demanda.vencimientoPagare,
        category               : carpeta.category,
        idProcesos             : carpeta.idProcesos
          ? carpeta.idProcesos
          : [],
        deudor: JSON.stringify(
          carpeta.deudor
        ),
        demanda: JSON.stringify(
          carpeta.demanda
        ),
        procesos: {

        },
        actuaciones: {
          createMany: {
            data: carpeta.actuaciones
          }
        },
        obligaciones: carpeta.demanda.obligacion.map(
          (
            o
          ) => {
            return String(
              o
            );
          }
        ),

      };
    }




    const carpeteer = await prisma.carpeta.upsert(
      {
        where: {
          id: newCarpeta.numero
        },
        create: newCarpeta,
        update: newCarpeta
      }
    );
    console.log(
      `carpeteer es igual a ${ carpeteer }`
    );
    continue;
  }
}

console.log(
  inserterCarpetas()
);