import carpetas from '/home/cachorro_cami/Projects/com/rsasesorjuridico/tester/provisionalCarpetas.json';

const llaves = carpetas
  .map(
    (
      carp 
    ) => {
      const noKey = 'noKey';

      const {
        llaveProceso, idProcesos, numero 
      } = carp;
      console.log(
        idProcesos?.length 
      );

      if ( !llaveProceso ) {
        return {
          numero: String(
            numero 
          ),
          llaveProceso: noKey,
          idProceso   : noKey,
        };
      } else if ( !idProcesos || idProcesos.length === 0 ) {
        return {
          numero: String(
            numero 
          ),
          llaveProceso: llaveProceso,
          idProceso   : noKey,
        };
      } else if ( idProcesos.length === 1 ) {
        return {
          numero: String(
            numero 
          ),
          llaveProceso: llaveProceso,
          idProceso   : String(
            idProcesos[ 0 ] 
          ),
        };
      }

      return idProcesos.map(
        (
          idProceso 
        ) => {
          return {
            numero: String(
              numero 
            ),
            llaveProceso: llaveProceso,
            idProceso   : String(
              idProceso 
            ),
          };
        } 
      );
    } 
  )
  .flat();

console.log(
  llaves 
);
console.log(
  llaves.length 
);
