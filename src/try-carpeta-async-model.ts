import Carpetas from './data/carpetas';
import { Carpeta } from './models/carpeta';
import * as fs from 'fs/promises';

async function tryAsyncCarpetas () {
  const carpetasMap = Carpetas.map(
    (
      carpeta, index
    ) => {
      console.log(
        `index: ${ index } ==== carpeta: ${ carpeta.NUMERO }`
      );
      return new Carpeta(
        carpeta
      );
    }
  );
  fs.writeFile(
    'carpetasModelPreAwait.json', JSON.stringify(
      carpetasMap
    )
  );

  for await ( const carpeta of carpetasMap ) {
    await carpeta.getProcesos();
    await carpeta.getActuaciones();
  }

  fs.writeFile(
    'carpetasModelPostAwait.json', JSON.stringify(
      carpetasMap
    )
  );
  return carpetasMap;
}

console.log(
  tryAsyncCarpetas() 
);