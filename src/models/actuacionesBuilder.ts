export class ActuacionJudicial implements  {
  _actuaciones: intActuacion[] | null;
  constructor() {
  }

  async getActuaciones(
    idProceso: number
  ) {

    try {

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      );

      if ( !request.ok ) {
        const json = await request.json();
        throw new Error(
          JSON.stringify(
            json
          )
        );
      }

      const consultaActuaciones
            = ( await request.json() ) as ConsultaActuacion;

      const {
        actuaciones
      } = consultaActuaciones;

      const [ ultimaActuacion ] = actuaciones;

      const incomingDate = new Date(
        ultimaActuacion.fechaActuacion
      );

      const incomingYear = incomingDate.getFullYear();

      const incomingMonth = incomingDate.getMonth();

      const incomingDay = incomingDate.getDate();
      console.log(
        `${ this.numero } => la nueva fecha de la actuacion es: ${ new Date(
          incomingYear,
          incomingMonth,
          incomingDay,
        ) } y el timezone offset es  ${ incomingDate.getTimezoneOffset() }
          raw: ${ ultimaActuacion.fechaActuacion }`,
      );



      const savedYear = this.fecha?.getFullYear();

      const savedMonth = this.fecha?.getMonth();

      const savedDay = this.fecha?.getDate();
      console.log(
        `${ this.numero
        } => la fecha guardada en el servidor de LINK -  actuacion es: ${ new Date(
          savedYear ?? 0,
          savedMonth ?? 0,
          savedDay,
        ) }`,
      );

      if (
        !this.fecha
            || this.fecha < incomingDate
            || this.fecha.toString() === 'Invalid Date'
      ) {
        this.fecha = new Date(
          ultimaActuacion.fechaActuacion
        );
        this.ultimaActuacion = {
          ...ultimaActuacion
          , idProceso  : proceso.idProceso
          , isUltimaAct: ultimaActuacion.cant === ultimaActuacion.consActuacion
            ? true
            : false
        };

      }

      actuaciones.forEach(
        (
          actuacion
        ) => {
          actuacionesMap.add(
            {
              ...actuacion
              , idProceso: proceso.idProceso
              , isUltimaAct:
                    actuacion.cant === actuacion.consActuacion
                      ? true
                      : false
              , carpetaNumero : this.numero
              , createdAt     : new Date
              , fechaActuacion: new Date(
                actuacion.fechaActuacion
              )
              , fechaRegistro: new Date(
                actuacion.fechaRegistro
              )
              , fechaInicial: actuacion.fechaInicial
                ? new Date(
                  actuacion.fechaInicial
                )
                : null
              , fechaFinal: actuacion.fechaFinal
                ? new Date(
                  actuacion.fechaFinal
                )
                : null,
            }
          );
        }
      );
    } catch ( error ) {
      console.log(
        `${ this.numero } => Error CarpetaBuilder.getActuaciones.fetchError(${ this.numero } : ${ proceso.idProceso }) => ${ error }`,
      );

    }

  }
}