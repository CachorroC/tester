import * as fs from 'fs/promises';
import Carpetas from './src/data/carpetas';
import { CarpetaJudicial } from './src/models/thenable';
import { categoryAssignment } from './src/models/categories';
import { Prisma, PrismaClient } from '@prisma/client';
import { IntCarpeta } from './src/types/carpetas';
import { connectToDatabase } from './src/services/database.service';

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
      nombre      : true,
    },
  }
);

//NOTE 3: This type will include a user and all their posts
export type CarpetaWithPosts = Prisma.CarpetaGetPayload<typeof userWithPosts>;

const prisma = new PrismaClient();

async function f() {
  const newCarpetasMap = new Map<number, CarpetaJudicial>();

  const sortedCarpetas = [
    ...Carpetas
  ].sort(
    (
      a, b
    ) => {
      if ( a.numero > b.numero ) {
        return 1;
      } else if ( a.numero < b.numero ) {
        return -1;
      }

      return 0;
    }
  );

  for ( const rawCarpeta of sortedCarpetas ) {
    const carpeta = categoryAssignment(
      rawCarpeta
    );

    if ( carpeta.category === 'Terminados' ) {
      continue;
    }

    const thener = new CarpetaJudicial(
      carpeta
    );
    await fs.mkdir(
      `carpetas/${ thener.numero }/`, {
        recursive: true
      }
    );

    fs.writeFile(
      `carpetas/${ thener.numero }/thenable.json`, JSON.stringify(
        thener, null, 2
      )
    );
    thener.createCarpeta();

    for ( const key in thener ) {
      if ( Object.prototype.hasOwnProperty.call(
        thener, key
      ) ) {
        const element = thener[ key ];

        console.log(
          `for ${ key } in thener =-=>  ${ JSON.stringify(
            element
          ) }`
        );
      }
    }

    const withProcesos = await thener.consultaProcesos();

    const idkFileWithProcesos = {
      thener      : thener,
      withProcesos: withProcesos
    };

    fs.writeFile(
      `carpetas/${ thener.numero }/withProcesos.json`, JSON.stringify(
        idkFileWithProcesos, null, 2
      )
    );

    if ( !thener.procesos || thener.procesos.length === 0 ) {
      newCarpetasMap.set(
        carpeta.numero, thener
      );
      await updateMongoCarpeta(
        {
          carpeta: thener
        }
      );
      continue;
    }

    const withActuaciones = await thener.consultaActuaciones();

    const idkFileWithActs = {
      thener  : thener,
      withActs: withActuaciones
    };

    fs.writeFile(
      `carpetas/${ thener.numero }/withActs.json`, JSON.stringify(
        idkFileWithActs, null, 2
      )
    );

    if (
      !thener.actuaciones
      || thener.actuaciones.length === 0
    ) {
      newCarpetasMap.set(
        carpeta.numero, thener
      );
      await updateMongoCarpeta(
        {
          carpeta: thener
        }
      );
      continue;
    }

    newCarpetasMap.set(
      carpeta.numero, thener
    );
    await updateMongoCarpeta(
      {
        carpeta: thener
      }
    );
    continue;
  }

  const resultArray = Array.from(
    newCarpetasMap.values()
  );

  fs.writeFile(
    'provisionalCarpetas.json',
    JSON.stringify(
      resultArray, null, 2
    ),
  );

  return resultArray;
}

async function inserterCarpetas() {
  const carpetas = await f();

  for ( const carpeta of carpetas ) {
    const {
      numero, nombre, category, llaveProceso, idProcesos,  procesos, actuaciones
    } = carpeta;



    try {
      let newCarpeta: Prisma.CarpetaCreateInput;

      if ( llaveProceso === null ) {
        newCarpeta = {
          numero  : numero,
          nombre  : nombre,
          category: category,
        };
      } else if ( !procesos || procesos.length === 0 ) {
        newCarpeta = {
          numero      : numero,
          nombre      : nombre,
          llaveProceso: llaveProceso,
          idProcesos  : idProcesos
            ? idProcesos
            : [],
          category: category,
        };
      } else if ( !actuaciones || actuaciones.length === 0 ) {
        newCarpeta = {
          numero      : numero,
          nombre      : nombre,
          llaveProceso: llaveProceso,
          idProcesos  : idProcesos
            ? idProcesos
            : [],
          category: category,
          procesos: {
            createMany: {
              data: procesos.map(
                (
                  proceso
                ) => {
                  return {
                    ...proceso,
                    fechaProceso: proceso.fechaProceso
                      ? String(
                        proceso.fechaProceso
                      )
                      : null,
                    fechaUltimaActuacion: proceso.fechaUltimaActuacion
                      ? String(
                        proceso.fechaUltimaActuacion
                      )
                      : null,
                  };
                }
              ),
            },
          },
        };
      } else {
        newCarpeta = {
          numero      : numero,
          nombre      : nombre,
          llaveProceso: llaveProceso,
          category    : category,
          idProcesos  : idProcesos
            ? idProcesos
            : [],
          procesos: {
            createMany: {
              data: procesos.map(
                (
                  proceso
                ) => {
                  return {
                    ...proceso,
                    fechaProceso: proceso.fechaProceso
                      ? String(
                        proceso.fechaProceso
                      )
                      : null,
                    fechaUltimaActuacion: proceso.fechaUltimaActuacion
                      ? String(
                        proceso.fechaUltimaActuacion
                      )
                      : null,
                  };
                }
              ),
            },
          },
          actuaciones: {
            createMany: {
              data: actuaciones,
            },
          },

        };
      }

      const carpeteer = await prisma.carpeta.update(
        {
          where: {
            numero: numero
          },
          data: newCarpeta
        }
      );
      console.log(
        `carpeteer =-=> ${ JSON.stringify(
          carpeteer, null, 2
        ) }`
      );
      continue;
    } catch ( error ) {
      console.log(
        `error en el inserterCarpeta de ${ numero } =-=> ${ JSON.stringify(
          error,
          null,
          2,
        ) }`,
      );
      continue;
    }
  }
}

console.log(
  `iserterCarpetas =-=> ${ inserterCarpetas() }`
);
inserterCarpetas();




export async function updateMongoCarpeta (
  {
    carpeta
  }: { carpeta: IntCarpeta }
) {
  try {

    const collection = await connectToDatabase();

    const updateCarpeta = await collection.findOneAndUpdate(
      {
        numero: carpeta.numero
      }, {
        $set: carpeta
      }, {
        upsert        : true,
        returnDocument: 'after'
      }
    );

    if ( !updateCarpeta ) {
      throw new Error(
        'no hay ninguna carpeta devuelta de la actualizacion en mongodb'
      );

    }

    return {
      ...updateCarpeta,
      _id: updateCarpeta._id.toString()
    };

  } catch ( error ) {
    console.log(
      JSON.stringify(
        error
      )
    );
    return null;
  }
}