import { ConsultaActuacion } from '../types/actuaciones';
import { Actuacion } from '../types/schema';

export class ActuacionJudicial {
  _fecha: Date | null;
  _actuaciones: Actuacion[] | null;
  _ultimaActuacion: Actuacion | null;
  idProceso: number;
  carpetaNumero: number;
  constructor (
    idProceso: number, carpetaNumero: number
  ) {
    this.idProceso = idProceso;
    this.carpetaNumero = carpetaNumero;
    this._fecha = null;
    this._actuaciones = null;
    this._ultimaActuacion = null;
  }

  async getActuaciones() {

    try {
      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ this.idProceso }`,
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
        `${ this.carpetaNumero } => la nueva fecha de la actuacion es: ${ new Date(
          incomingYear,
          incomingMonth,
          incomingDay,
        ) } y el timezone offset es  ${ incomingDate.getTimezoneOffset() }
          raw: ${ ultimaActuacion.fechaActuacion }`,
      );



      const savedYear = this._fecha
        ? this._fecha.getFullYear()
        : 2015;

      const savedMonth = this._fecha
        ?this._fecha.getMonth()
        : 0;

      const savedDay = this._fecha
        ? this._fecha.getDate()
        : 1;
      console.log(
        `${ this.carpetaNumero
        } => la fecha guardada en el servidor de LINK -  actuacion es: ${ new Date(
          savedYear ?? 0,
          savedMonth ?? 0,
          savedDay,
        ) }`,
      );

      if (
        !this._fecha
            || this._fecha < incomingDate
            || this._fecha.toString() === 'Invalid Date'
      ) {
        this._fecha = new Date(
          ultimaActuacion.fechaActuacion
        );
        this._ultimaActuacion = {
          ...ultimaActuacion
          , idProceso     : this.idProceso
          , fechaActuacion: new Date(
            ultimaActuacion.fechaActuacion
          )
          , fechaRegistro: new Date(
            ultimaActuacion.fechaRegistro
          )
          , fechaFinal: ultimaActuacion.fechaFinal
            ? new Date(
              ultimaActuacion.fechaFinal
            )
            : null
          , fechaInicial: ultimaActuacion.fechaInicial
            ? new Date(
              ultimaActuacion.fechaInicial
            )
            : null
          , isUltimaAct: ultimaActuacion.cant === ultimaActuacion.consActuacion
            ? true
            : false
        };

      }

      this._actuaciones = actuaciones.map(
        (
          actuacion
        ) => {
          return {

            ...actuacion
            , idProceso: this.idProceso
            , isUltimaAct:
                    actuacion.cant === actuacion.consActuacion
                      ? true
                      : false
            , carpetaNumero : this.carpetaNumero
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
          };
        }
      );


    } catch ( error ) {
      console.log(
        `${ this.carpetaNumero } => Error CarpetaBuilder.getActuaciones.fetchError(${ this.carpetaNumero } : ${ this.idProceso }) => ${ error }`,
      );

    }

  }

  get actuaciones () {
    return this._actuaciones;
  }
}