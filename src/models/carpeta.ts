
import { outProceso } from '../procesos';
import { ConsultaActuacion, outActuacion } from '../types/actuaciones';
import { ConsultaNumeroRadicacion } from '../types/procesos';
import { RawDb } from '../types/raw-db';
import { NewJuzgado } from './juzgado';

export class Carpeta {
  numero: number;
  procesos: outProceso[]=[];
  llaveProceso: string;
  idProcesos: number[]=[];

  actuaciones: outActuacion[] = [];
  ultimaActuacion: outActuacion | null;
  fecha: Date | null;
  idRegUltimaAct: number | null;
  constructor(
    rawCarpeta: RawDb
  ) {
    const {
      EXPEDIENTE, NUMERO
    } = rawCarpeta;
    this.idRegUltimaAct = null;
    this.fecha = null;
    this.ultimaActuacion = null;
    this.llaveProceso = EXPEDIENTE
      ?  String(
        EXPEDIENTE
      )
      : 'SinEspecificar';
    this.numero = Number(
      NUMERO
    );
  }
  async getProcesos() {
    try {
      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`
      );

      if ( !request.ok ) {
        const json = await request.json();

        throw new Error(
          JSON.stringify(
            json
          )
        );
      }

      const consultaProcesos
        = ( await request.json() ) as ConsultaNumeroRadicacion;

      const {
        procesos
      } = consultaProcesos;

      for ( const rawProceso of procesos ) {
        if ( rawProceso.esPrivado ) {
          continue;
        }

        const proceso = {
          ...rawProceso,
          fechaProceso: rawProceso.fechaProceso
            ? new Date(
              rawProceso.fechaProceso
            )
            : null,
          fechaUltimaActuacion:
            rawProceso.fechaUltimaActuacion
              ? new Date(
                rawProceso.fechaUltimaActuacion
              )
              : null,
          juzgado: new NewJuzgado(
            rawProceso
          ),
        };
        this.procesos.push(
          proceso
        );
        this.idProcesos.push(
          proceso.idProceso
        );
      }

      return this.procesos;

    } catch ( error ) {
      console.log(
        `${ this.numero } => error en CarpetaBuilder.getProcesos(${ this.llaveProceso }) => ${ error }`
      );
      return [];
    }
  }

  async getActuaciones () {
    if ( this.idProcesos.length === 0 ) {
      return [];
    }

    for ( const idProceso of this.idProcesos ) {
      try {
        const request =await fetch(
          `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`
        );

        if ( !request.ok ) {
          throw new Error(
            request.statusText
          );
        }

        const consultaActuaciones
          = ( await request.json() ) as ConsultaActuacion;

        const {
          actuaciones
        } = consultaActuaciones;

        const outActuaciones = actuaciones.map(
          (
            actuacion
          ) => {
            return {
              ...actuacion,
              idProceso: idProceso,
              isUltimaAct:
              actuacion.cant === actuacion.consActuacion
                ? true
                : false,
              createdAt     : new Date(),
              fechaActuacion: new Date(
                actuacion.fechaActuacion
              ),
              fechaRegistro: new Date(
                actuacion.fechaRegistro
              ),
              fechaInicial: actuacion.fechaInicial
                ? new Date(
                  actuacion.fechaInicial
                )
                : null,
              fechaFinal: actuacion.fechaFinal
                ? new Date(
                  actuacion.fechaFinal
                )
                : null,
            };
          }
        );

        outActuaciones.forEach(
          (
            actuacion
          ) => {
            this.actuaciones.push(
              actuacion
            );
          }
        );
        continue;
      } catch ( error ) {
        console.log(
          `${ this.numero } ERROR ==> getActuaciones ${ idProceso } => ${ JSON.stringify(
            error, null, 2
          ) }`
        );
        continue;
      }
    }

    if ( this.actuaciones.length > 0 ) {
      const sorted = [ ...this.actuaciones ].sort(
        (
          a, b
        ) => {
          const fechaA = a.fechaActuacion;

          const fechaB = b.fechaActuacion;

          if ( fechaA < fechaB ) {
            return -1;
          } else if ( fechaA > fechaB ) {
            return 1;
          }

          return 0;

        }
      );


      const [ ultimaActuacion ] = sorted;
      this.ultimaActuacion = ultimaActuacion;
      this.fecha = ultimaActuacion.fechaActuacion;
      this.idRegUltimaAct = ultimaActuacion.idRegActuacion;
    }

    return this.actuaciones;
  }
}
