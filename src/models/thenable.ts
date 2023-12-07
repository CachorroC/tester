import {  Juzgado,

  PrismaClient, } from '@prisma/client';
import { Despachos } from '../data/despachos';
import { ConsultaActuacion, intActuacion } from '../types/actuaciones';
import { Category,
  TipoProceso,
  IntDeudor,
  CarpetaRaw,
  Codeudor,
  IntCarpeta,
  IntDemanda,
  DemandaRaw, } from '../types/carpetas';
import { ConsultaNumeroRadicacion,
  Data,
  Message,
  intProceso, } from '../types/procesos';
import { ClassDemanda } from './demanda';
import { ClassDeudor } from './deudor';
import { PrismaDemanda, PrismaDeudor } from './prisma-carpeta';
import { tipoProcesoBuilder } from '../data/tipoProcesos';

const client = new PrismaClient();

export class NewJuzgado implements Juzgado {
  constructor(
    proceso: intProceso
  ) {
    const matchedDespacho = Despachos.find(
      (
        despacho
      ) => {
        const nDesp = despacho.nombre
          .toLowerCase()
          .normalize(
            'NFD'
          )
          .replace(
            /\p{Diacritic}/gu, ''
          )
          .trim();

        const pDesp = proceso.despacho
          .toLowerCase()
          .normalize(
            'NFD'
          )
          .replace(
            /\p{Diacritic}/gu, ''
          )
          .trim();

        const indexOfDesp = nDesp.indexOf(
          pDesp
        );

        if ( indexOfDesp >= 0 ) {
          console.log(
            `procesos despacho is in despachos ${ indexOfDesp + 1 }`
          );
        }

        return nDesp === pDesp;
      }
    );

    const nameN = matchedDespacho
      ? matchedDespacho.nombre
      : proceso.despacho;

    const matchedId = nameN.match(
      /\d+/g
    );

    this.id = Number(
      matchedId?.toString()
    );
    ( this.tipo = proceso.despacho ),
    ( this.url = matchedDespacho
      ? `https://www.ramajudicial.gov.co${ matchedDespacho.url }`
      : `https://www.ramajudicial.gov.co${ proceso.despacho
        .replaceAll(
          ' ', '-'
        )
        .toLowerCase() }` );
  }
  id: number;
  tipo: string;
  url: string;
}

export class CarpetaJudicial implements IntCarpeta {
  numero: number;
  llaveProceso: string;
  demanda: DemandaRaw;
  fecha: Date | null;
  ultimaActuacion: intActuacion | null;
  category: Category;
  tipoProceso: TipoProceso;
  deudor: IntDeudor;
  codeudor: Codeudor | null;
  readonly cc: number;
  procesos: intProceso[] | null;

  // SECTION constructor
  constructor(
    {
      codeudor, category, deudor, demanda, numero
    }: CarpetaRaw
  ) {
    this.procesos = null;
    this.fecha = null;
    this.ultimaActuacion = null;
    this.llaveProceso = demanda.llaveProceso;
    this.numero = numero;
    this.tipoProceso = demanda.tipoProceso
      ? tipoProcesoBuilder(
        demanda.tipoProceso
      )
      : 'SINGULAR';
    this.category = category;
    this.deudor = new ClassDeudor(
      deudor
    );
    this.demanda = demanda;
    this.codeudor = codeudor
      ? {
          nombre: codeudor.nombre
            ? String(
              codeudor.nombre
            )
            : null
          , cedula: codeudor.cedula
            ? String(
              codeudor.cedula
            )
            : null
          , direccion: codeudor.direccion
            ? String(
              codeudor.direccion
            )
            : null
          , telefono: codeudor.telefono
            ? String(
              codeudor.telefono
            )
            : null
          , id           : this.numero
          , carpetaNumero: this.numero
        }
      : null;
    this.demandas = [
      new ClassDemanda(
        demanda, numero
      )
    ];
    this.idProcesos = [];
    this.cc = Number(
      deudor.cedula
    );
  }
  demandas: IntDemanda[];
  idProcesos: number[] ;
  //!SECTION

  get nombre() {
    return `${ this.deudor.primerNombre } ${ this.deudor.segundoNombre } ${ this.deudor.primerApellido } ${ this.deudor.segundoApellido }`;
  }
  set nombre(
    nom
  ) {
    [
      this.deudor.primerNombre,
      this.deudor.segundoNombre,
      this.deudor.primerApellido,
      this.deudor.segundoApellido,
    ] = nom.split(
      ' '
    );
  }
  async prismaCarpeta() {
    try {
      return await client.carpeta.upsert(
        {
          where: {
            numero: this.numero,
          }
          , create: {
            nombre      : this.nombre
            , category    : this.category
            , llaveProceso: this.llaveProceso
            , numero      : this.numero
            , demandas    : {
              connectOrCreate: {
                where: {
                  idProceso: this.numero,
                }
                , create: new PrismaDemanda(
                  this
                ),
              },
            }
            , deudor: {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero,
                }
                , create: new PrismaDeudor(
                  this
                ),
              },
            }
            , terminado: this.category === 'Terminados'
              ? true
              : false
            , tipoProceso: this.tipoProceso
            , revisado   : false,
          }
          , update: {
            nombre  : this.nombre
            , category: this.category
            , numero  : this.numero
            , demandas: {
              connectOrCreate: {
                where: {
                  idProceso: this.numero,
                }
                , create: new PrismaDemanda(
                  this
                ),
              },
            }
            , deudor: {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero,
                }
                , create: new PrismaDeudor(
                  this
                ),
              },
            }
            , terminado: this.category === 'Terminados'
              ? true
              : false
            , tipoProceso : this.tipoProceso
            , llaveProceso: this.llaveProceso,
          },
        }
      );
    } catch ( error ) {
      console.log(
        `${ this.numero } => CarpetaJudicial.prismaCarpeta(${ this.numero }) Error => ${ error }`,
      );
      return null;
    }
  }
  //SECTION consultaProcesos
  async consultaProcesos() {
    const idProcesosSet = new Set<number>();

    const sujetosProcesalesSet = new Set<string>();

    const despachosSet = new Set<string>();

    const juzgadosSet = new Set<Juzgado>();

    try {
      if ( !this.llaveProceso ) {
        throw new Error(
          'aún no se le ha asignado un número de expediente a esta this.llaveProceso',
        );
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`,
      );

      if ( !request.ok ) {
        const json = ( await request.json() ) as Data;
        return json;
      }

      const json = ( await request.json() ) as ConsultaNumeroRadicacion;

      const responseReturn = {
        StatusCode: request.status
        , Message   : request.statusText as Message
        , procesos  : json.procesos,
      };

      const procesosDemandaMap = new Set<IntDemanda>();

      for ( const proceso of responseReturn.procesos ) {
        const npd = new ClassDemanda(
          this, this.numero, proceso
        );
        procesosDemandaMap.add(
          npd
        );

        if ( proceso.esPrivado ) {
          continue;
        }

        idProcesosSet.add(
          proceso.idProceso
        );
        despachosSet.add(
          proceso.despacho
        );
        juzgadosSet.add(
          new NewJuzgado(
            proceso
          )
        );
        sujetosProcesalesSet.add(
          proceso.sujetosProcesales
        );
      }

      this.demandas = Array.from(
        procesosDemandaMap
      );
      this.procesos = responseReturn.procesos;
      this.idProcesos = responseReturn.procesos.map(
        (
          prc
        ) => {
          return prc.idProceso;
        }
      );



      return responseReturn;
    } catch ( error ) {
      if ( error instanceof Error ) {
        console.log(
          `${ this.numero } => Expediente: ${ this.llaveProceso }: error en la conexion network del fetchProceso ${ error.name } : ${ error.message }`,
        );

        return {
          StatusCode: 404
          , Message   : `${ error.name }: ${ error.message }`,
        };
      }

      console.log(
        `${ this.numero } => Expediente: ${ this.llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ error }`,
      );

      return {
        StatusCode: 404
        , Message   : JSON.stringify(
          error, null, 2
        ),
      };
    }
  }
  async prismaProcesos() {
    try {
      if ( !this.procesos || this.procesos.length === 0 ) {
        throw new Error(
          `${ this.numero } => no hay procesos en esta carpeta.`
        );
      }

      return await client.carpeta.upsert(
        {
          where: {
            numero: this.numero,
          }
          , update: {
            idProcesos: {
              set: this.procesos.map(
                (
                  prc
                ) => {
                  return prc.idProceso;
                }
              ),
            }
            , procesos: {
              upsert: this.procesos.map(
                (
                  proceso
                ) => {
                  return {
                    create: {
                      ...proceso
                      , fechaProceso: proceso.fechaProceso
                        ? new Date(
                          proceso.fechaProceso
                        )
                        : null
                      , fechaUltimaActuacion: proceso.fechaUltimaActuacion
                        ? new Date(
                          proceso.fechaUltimaActuacion
                        )
                        : null,
                    }
                    , update: {
                      ...proceso
                      , fechaProceso: proceso.fechaProceso
                        ? new Date(
                          proceso.fechaProceso
                        )
                        : null
                      , fechaUltimaActuacion: proceso.fechaUltimaActuacion
                        ? new Date(
                          proceso.fechaUltimaActuacion
                        )
                        : null,
                    }
                    , where: {
                      idProceso: proceso.idProceso,
                    },
                  };
                }
              ),
            },
          }
          , create: {
            idProcesos: {
              set: this.procesos.map(
                (
                  prc
                ) => {
                  return prc.idProceso;
                }
              ),
            }
            , nombre      : this.nombre
            , category    : this.category
            , numero      : this.numero
            , llaveProceso: this.llaveProceso
            , demandas    : {
              connectOrCreate: this.procesos.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso,
                    }
                    , create: new PrismaDemanda(
                      this, proceso
                    )
                  };
                }
              )
            }
            , deudor: {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero,
                }
                , create: new PrismaDeudor(
                  this
                ),
              },
            }

            , procesos: {
              connectOrCreate: this.procesos.map(
                (
                  proceso
                ) => {
                  return {
                    create: {
                      ...proceso
                      , fechaProceso: proceso.fechaProceso
                        ? new Date(
                          proceso.fechaProceso
                        )
                        : null
                      , fechaUltimaActuacion: proceso.fechaUltimaActuacion
                        ? new Date(
                          proceso.fechaUltimaActuacion
                        )
                        : null,
                    }

                    , where: {
                      idProceso: proceso.idProceso,
                    },
                  };
                }
              ),
            }
            , terminado: this.category === 'Terminados'
              ? true
              : false
            , tipoProceso: this.tipoProceso
            , revisado   : false,
          },
        }
      );
    } catch ( error ) {
      console.log(
        `${ this.numero } => ${ error }`
      );
      return null;
    }
  }
  //!SECTION
  // SECTION consultaActuaciones
  async consultaActuaciones() {
    try {
      const actuacionesMap = new Map<number, intActuacion>();

      const actuacionesSet = new Set<intActuacion>();

      if ( !this.idProcesos || this.idProcesos.length === 0 ) {
        throw new Error(
          'no hay idProcesos correspondientes para hacer la busqueda de este proceso.',
        );
      }

      for ( const idProceso of this.idProcesos ) {
        const request = await fetch(
          `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
        );

        if ( !request.ok ) {
          const json = ( await request.json() ) as Data;
          console.log(
            `${ this.numero } => error en fetch consultaActuaciones ${ idProceso } =-=> ${ JSON.stringify(
              json,
              null,
              2,
            ) }`,
          );
          return json;
        }

        const data = ( await request.json() ) as ConsultaActuacion;

        const {
          actuaciones
        } = data;

        const [
          ultimaActuacion
        ] = actuaciones;

        actuaciones.forEach(
          (
            actuacion
          ) => {
            actuacionesSet.add(
              {
                ...actuacion
                , idProceso: idProceso,
              }
            );
          }
        );

        actuacionesMap.set(
          idProceso, {
            ...ultimaActuacion
            , idProceso: idProceso,
          }
        );

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

        const savedDate = this.fecha
          ? this.fecha
          : null;

        const savedYear = savedDate?.getFullYear();

        const savedMonth = savedDate?.getMonth();

        const savedDay = savedDate?.getDate();
        console.log(
          `${
            this.numero
          } => la fecha guardada en el servidor de LINK -  actuacion es: ${ new Date(
            savedYear ?? 0,
            savedMonth ?? 0,
            savedDay,
          ) }`,
        );

        if (
          !savedDate
          || savedDate < incomingDate
          || savedDate.toString() === 'Invalid Date'
        ) {
          this.fecha = new Date(
            ultimaActuacion.fechaActuacion
          );
          this.ultimaActuacion = {
            ...ultimaActuacion
            , idProceso: idProceso,
          };
        }
      }

      if ( actuacionesMap.size > 0 ) {
        return {
          StatusCode : 200
          , Message    : 'ok' as Message
          , actuaciones: Array.from(
            actuacionesMap.values()
          ),
        };
      }

      throw new Error(
        'actuaciones size is less than 0'
      );
    } catch ( error ) {
      if ( error instanceof Error ) {
        console.log(
          `${ this.numero } => Expediente: ${ this.llaveProceso }: error en la conexion network del fetchProceso ${ error.name } : ${ error.message }`,
        );

        return {
          StatusCode: 404
          , Message   : `${ error.name }: ${ error.message }`,
        };
      }

      console.log(
        `${ this.numero } => Expediente: ${ this.llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ error }`,
      );

      return {
        StatusCode: 404
        , Message   : JSON.stringify(
          error, null, 2
        ),
      };
    }
  }
}

export const sleep = (
  ms: number
) => {
  return new Promise(
    (
      resolve
    ) => {
      const newMs = ms;

      return setTimeout(
        resolve, newMs
      );
    }
  );
};
