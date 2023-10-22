import { ConsultaNumeroRadicacion, Data, Message, intProceso } from '../types/procesos';

export class Thenable {
  num: number;
  _llaveProceso: string | null;
  procesos?: intProceso[];
  idProcesos?: number[];
  constructor(
    num: number, llaveProceso? : string
  ) {
    this._llaveProceso = llaveProceso
      ? llaveProceso
      : null;
    this.num = num;
  }
  set llaveProceso (
    llave: string | null
  ) {
    if ( !llave || llave.length < 23 ) {
      return;
    }

    this._llaveProceso = llave;
  }
  get llaveProceso () {
    return this._llaveProceso;
  }
  async wait () {
    try {
      if ( !this.llaveProceso ) {
        throw new Error(
          'aún no se le ha asignado un número de expediente a esta carpeta.'
        );

      }

      const request = await  fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`
      );

      if ( !request.ok ) {
        const json = ( await request.json() ) as ConsultaNumeroRadicacion;
        return json;
      }

      const json = ( await request.json() ) as Data;

      const responseReturn: ConsultaNumeroRadicacion = {
        StatusCode: request.status,
        Message   : request.statusText as Message,
        procesos  : json.procesos
      };
      this.procesos = json.procesos;
      this.idProcesos = json.procesos.map(
        (
          proceso
        ) => {
          return proceso.idProceso;
        }
      );
      return await Promise.resolve(
        responseReturn
      );
    } catch ( error ) {

      if ( error instanceof Error ) {
        console.log(
          `Expediente: ${ this._llaveProceso }: error en la conexion network del fetchProceso ${ error.name } : ${ error.message }`,
        );

        return {
          StatusCode: 404,
          Message   : `${ error.name }: ${ error.message }`
        };
      }

      console.log(
        `Expediente: ${ this._llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ error }`,
      );

      return {
        StatusCode: 404,
        Message   : JSON.stringify(
          error, null, 2
        )
      };
    }
  }
}
