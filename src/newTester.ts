import {
  insertCarpetaInPrisma,
  insertDeudorInPrisma,
  insertDemandaInPrisma,
} from "./data/insert-carpetas";
import carpetasRaw from "./provisionalCarpetas.json";
import * as fs from "fs/promises";

const llaves = carpetasRaw
  .map((carp) => {
    const noKey = "noKey";

    const { llaveProceso, idProcesos, numero } = carp;
    console.log(idProcesos?.length);

    if (!llaveProceso) {
      return {
        numero: String(numero),
        llaveProceso: noKey,
        idProceso: noKey,
      };
    } else if (!idProcesos || idProcesos.length === 0) {
      return {
        numero: String(numero),
        llaveProceso: llaveProceso,
        idProceso: noKey,
      };
    } else if (idProcesos.length === 1) {
      return {
        numero: String(numero),
        llaveProceso: llaveProceso,
        idProceso: String(idProcesos[0]),
      };
    }

    return idProcesos.map((idProceso) => {
      return {
        numero: String(numero),
        llaveProceso: llaveProceso,
        idProceso: String(idProceso),
      };
    });
  })
  .flat();

console.log(llaves);
console.log(llaves.length);

async function insertManyCarpetas() {
  const carpetas = [...carpetasRaw].sort((a, b) => {
    const x = a.numero;

    const y = b.numero;

    if (x < y) {
      return -1;
    }

    if (x > y) {
      return 1;
    }

    return 0;
  });

  for (const carpeta of carpetas) {
    try {
      const prismaCarpetaInserter = await insertCarpetaInPrisma({
        ...carpeta,
        nombre: carpeta.nombre,
      });
      fs.writeFile(
        `carpetas/${carpeta.numero}/prismaCarpetaInserterOutput.json`,
        JSON.stringify(prismaCarpetaInserter),
      );

      const prismaDeudorInserter = await insertDeudorInPrisma(carpeta);
      fs.writeFile(
        `carpetas/${carpeta.numero}/prismaDeudorInserterOutput.json`,
        JSON.stringify(prismaDeudorInserter),
      );

      const prismaDemandaInserter = await insertDemandaInPrisma(carpeta);
      fs.writeFile(
        `carpetas/${carpeta.numero}/prismaDemandaInserterOutput.json`,
        JSON.stringify(prismaDemandaInserter),
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
      console.log(JSON.stringify(insertOne, null, 2));
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }
}
