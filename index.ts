import * as fs from 'fs/promises';
import Carpetas from './src/data/carpetas';
import { CarpetaJudicial } from './src/models/thenable';
import { categoryAssignment } from './src/models/categories';
import { IntCarpeta } from './src/types/carpetas';
import { connectToDatabase } from './src/services/database.service';

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
    'provisionalCarpetas.json',
    JSON.stringify(
      resultArray, null, 2
    ),
  );


  return resultArray;
}

async function insertManyCarpetas () {
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

  const insertMany = await collection.insertMany(
    carpetas
  );
  console.log(
    insertMany
  );
}

insertManyCarpetas()
  .then(
    ff => {

      console.log(
        ff
      );
      return ff;
    }
  );




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