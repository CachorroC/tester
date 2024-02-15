import { Carpetas } from '../data/carpetas';
import { Carpeta } from '../models/carpeta';
import * as fs from 'fs/promises';
import { PrismaCarpeta } from '../models/prisma-carpeta';

const carpetasMap = Carpetas.map(
  (
    carpeta
  ) => {
    return new Carpeta(
      carpeta
    );
  }
);

async function* generateCarpetas() {
  for await ( const carpeta of carpetasMap ) {
    await carpeta.getProcesos();
    await carpeta.getActuaciones();
    yield carpeta;
  }
}

async function tryAsyncCarpetas() {
  const mapCarpetas: Map<number, Carpeta> = new Map();

  fs.writeFile(
    'carpetasModelPreAwait.json', JSON.stringify(
      carpetasMap
    )
  );

  for await ( const carpeta of generateCarpetas() ) {
    mapCarpetas.set(
      carpeta.numero, carpeta
    );

    await PrismaCarpeta.insertCarpeta(
      carpeta
    );
  }

  fs.writeFile(
    'carpetasModelPostAwait.json', JSON.stringify(
      carpetasMap
    )
  );
  return Array.from(
    mapCarpetas.values()
  );
}

console.log(
  tryAsyncCarpetas()
);
