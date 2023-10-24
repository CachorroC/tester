
import * as fs from 'fs/promises';
import Carpetas from './src/data/carpetas';
import { CarpetaJudicial } from './src/models/thenable';
import { categoryAssignment } from './src/models/categories';


async function f () {
  const newCarpetasMap = new Map();



  for ( const rawCarpeta of Carpetas ) {


    const carpeta
      = categoryAssignment(
        rawCarpeta
      );

    const thener = new CarpetaJudicial(
      carpeta
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
}

f();