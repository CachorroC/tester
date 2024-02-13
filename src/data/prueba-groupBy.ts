import { Judicial } from '../models/procesosBuilder';
import { Carpetas } from './carpetas';

async function* generatorCarpeta() {
  for ( const carpeta of Carpetas ) {
    const newCarpeta = new Judicial(
      carpeta.demanda.llaveProceso,
      carpeta.numero,
    );
    await newCarpeta.getProcesos();

    const prismaProcesos = await newCarpeta.prismaProcesos();
    console.log(
      JSON.stringify(
        prismaProcesos, null, 2 
      ) 
    );
    yield newCarpeta;
  }
}

async function ProcesosBuilder() {
  for await ( const carpeteer of generatorCarpeta() ) {
    console.log(
      carpeteer 
    );
  }
}

ProcesosBuilder()
  .then(
    (
      rr 
    ) => {
      console.log(
        rr 
      );
      return rr;
    } 
  );
