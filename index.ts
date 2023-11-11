import * as fs from 'fs/promises';
import Carpetas from './src/data/carpetas';
import { CarpetaJudicial, sleep } from './src/models/thenable';
import { categoryAssignment } from './src/models/categories';
import { connectToDatabase } from './src/services/database.service';
import { insertCarpetaInPrisma,
  insertDemandaInPrisma,
  insertDeudorInPrisma, } from './src/data/insert-carpetas';

async function f() {
  const newCarpetasMap = new Map<number, CarpetaJudicial>();

  const sortedCarpetas = [
    ...Carpetas
  ].sort(
    (
      a, b 
    ) => {
      const x = a.numero;

      const y = b.numero;

      if ( x < y ) {
        return -1;
      } else if ( x > y ) {
        return 1;
      }

      return 0;
    } 
  );

  for ( const rawCarpeta of sortedCarpetas ) {
    const carpeta = categoryAssignment(
      rawCarpeta 
    );

    /*  if ( carpeta.category === 'Terminados' ) {
      continue;
    } */

    const thener = new CarpetaJudicial(
      carpeta 
    );
    console.log(
      thener.cc 
    );
    await fs.mkdir(
      `carpetas/${ thener.numero }/`, {
        recursive: true,
      } 
    );

    await fs.writeFile(
      `carpetas/${ thener.numero }/thenable.json`,
      JSON.stringify(
        thener, null, 2 
      ),
    );

    await sleep(
      100 
    );

    const withProcesos = await thener.consultaProcesos();

    const idkFileWithProcesos = {
      thener      : thener,
      withProcesos: withProcesos,
    };

    fs.writeFile(
      `carpetas/${ thener.numero }/withProcesos.json`,
      JSON.stringify(
        idkFileWithProcesos, null, 2 
      ),
    );

    if ( !thener.procesos || thener.procesos.length === 0 ) {
      newCarpetasMap.set(
        carpeta.numero, thener 
      );

      for ( const key in thener ) {
        if ( Object.prototype.hasOwnProperty.call(
          thener, key 
        ) ) {
          const element = thener[ key ];

          console.log(
            `${ thener.numero } for key: ${ key } value =-=>  ${ JSON.stringify(
              element,
            ) }`,
          );
        }
      }

      continue;
    }

    await thener.consultaActuaciones();

    fs.writeFile(
      `carpetas/${ thener.numero }/withActs.json`,
      JSON.stringify(
        thener, null, 2 
      ),
    );

    newCarpetasMap.set(
      carpeta.numero, thener 
    );

    for ( const key in thener ) {
      if ( Object.prototype.hasOwnProperty.call(
        thener, key 
      ) ) {
        const element = thener[ key ];

        console.log(
          `${ thener.numero } for key: ${ key } value =-=>  ${ JSON.stringify(
            element,
          ) }`,
        );
      }
    }

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

async function insertManyCarpetas() {
  const carpetasRaw = await f();

  const carpetas = [
    ...carpetasRaw
  ].sort(
    (
      a, b 
    ) => {
      const x = a.numero;

      const y = b.numero;

      if ( x < y ) {
        return -1;
      }

      if ( x > y ) {
        return 1;
      }

      return 0;
    } 
  );

  const collection = await connectToDatabase();

  for ( const carpeta of carpetas ) {
    try {
      const prismaCarpetaInserter = await insertCarpetaInPrisma(
        carpeta 
      );
      fs.writeFile(
        `carpetas/${ carpeta.numero }/prismaCarpetaInserterOutput.json`,
        JSON.stringify(
          prismaCarpetaInserter 
        ),
      );

      const prismaDeudorInserter = await insertDeudorInPrisma(
        carpeta 
      );
      fs.writeFile(
        `carpetas/${ carpeta.numero }/prismaDeudorInserterOutput.json`,
        JSON.stringify(
          prismaDeudorInserter 
        ),
      );

      const prismaDemandaInserter = await insertDemandaInPrisma(
        carpeta 
      );
      fs.writeFile(
        `carpetas/${ carpeta.numero }/prismaDemandaInserterOutput.json`,
        JSON.stringify(
          prismaDemandaInserter 
        ),
      );

      const insertOne = await collection.updateOne(
        {
          numero: carpeta.numero,
        },
        {
          $set: carpeta,
        },
        {
          upsert: true,
        },
      );
      console.log(
        JSON.stringify(
          insertOne, null, 2 
        ) 
      );
    } catch ( error ) {
      console.log(
        JSON.stringify(
          error, null, 2 
        ) 
      );
    }
  }
}

insertManyCarpetas()
  .then(
    (
      ff 
    ) => {
      console.log(
        ff 
      );
      return ff;
    } 
  )
  .finally(
    () => {
      console.log(
        'finally' 
      );
      return;
    } 
  );
