
import carpetas from '/home/cachorro_cami/Projects/com/rsasesorjuridico/tester/provisionalCarpetas.json';
import { Carpeta } from './models/carpetas';

const llaves = carpetas.map(
  (
    carp
  ) => {
    const {
      numero,
      llaveProceso,
      idProcesos,
      deudor
    } = carp;

    return new Carpeta(carp);
  }
);

console.log(
  llaves
);