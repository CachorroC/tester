import { Carpeta } from '../models/carpeta';
import * as fs from 'fs/promises';
import { PrismaCarpeta } from '../models/prisma-carpeta';
import { generateCarpetas } from '../data/carpetas-generator';
process.env[ 'NODE_TLS_REJECT_UNAUTHORIZED' ] = '0';
console.log(
  process.env.NODE_TLS_REJECT_UNAUTHORIZED 
);

async function tryAsyncCarpetas() {
  const mapCarpetas: Map<number, Carpeta> = new Map();

  fs.writeFile(
    'carpetasModelPreAwait.json', JSON.stringify(
      mapCarpetas 
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
      mapCarpetas 
    ) 
  );
  return Array.from(
    mapCarpetas.values() 
  );
}

console.log(
  tryAsyncCarpetas() 
);
