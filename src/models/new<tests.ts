import { Juzgado, Category, TipoProceso, Prisma, PrismaClient } from '@prisma/client';
import { tipoProcesoBuilder } from '../data/tipoProcesos';
import { intActuacion, ConsultaActuacion } from '../types/actuaciones';
import { IntCarpeta, CarpetaRaw, IntDemanda, IntDeudor, Codeudor } from '../types/carpetas';
import { intProceso, ConsultaNumeroRadicacion } from '../types/procesos';
import { ClassDemanda } from './demanda';
import { ClassDeudor } from './deudor';
import { PrismaDemanda, PrismaDeudor } from './prisma-carpeta';
import { NewJuzgado } from './thenable';

const client = new PrismaClient(
  {
    errorFormat: 'pretty',
  }
);

export class Carpeta implements IntCarpeta {
  actuaciones?: { carpetaNumero: number | null; isUltimaAct: boolean; createdAt: Date; idRegActuacion: number; llaveProceso: string; consActuacion: number; fechaActuacion: Date; actuacion: string; anotacion: string | null; fechaInicial: Date | null; fechaRegistro: Date; fechaFinal: Date | null; codRegla: string; conDocumentos: boolean; cant: number; idProceso: number; }[];
  juzgados?: Juzgado[];


  constructor (
    {
      numero, deudor, category, codeudor, demanda
    }: CarpetaRaw
  ) {
    this.numero = numero;
    this.nombre = deudor.nombre;
    this.category = category;
    this.revisado = category === 'Terminados'
      ? true
      : false;
    this.codeudor = codeudor;
    this.tipoProceso = demanda.tipoProceso
      ? tipoProcesoBuilder(
        demanda.tipoProceso
      )
      : 'SINGULAR';
    this.deudor = new ClassDeudor(
      deudor
    );
    this.demanda = new ClassDemanda(
      demanda
    );
    this.terminado = category === 'Terminados'
      ? true
      : false;
    this.cc = Number(
      deudor.cedula
    );
    this.llaveProceso = demanda.llaveProceso;
  }
  numero: number;
  llaveProceso: string;
  demanda: IntDemanda;
  fecha?: Date;
  ultimaActuacion?: intActuacion;
  category: Category;
  revisado: boolean;
  terminado: boolean;
  tipoProceso: TipoProceso;
  deudor: IntDeudor;
  codeudor?: Codeudor;
  cc: number;
  procesos?: intProceso[];
  idProcesos?: number[];
  nombre: string;
  set _llaveProceso (
    expediente: string
  ) {
    if ( expediente.length === 23 ) {
      this.llaveProceso = expediente;
    }
  }

  async getProcesos () {
    try {
      if ( !this.llaveProceso ) {
        throw new Error(
          'no hay llaveProceso en esta carpeta, aborting'
        );
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`,
      );

      if ( !request.ok ) {
        const json = await request.json();

        const message = `Error CarpetaBuilder.getProcesos.fetchError(${ this.numero
        }) => ${ JSON.stringify(
          json, null, 2
        ) }`;
        throw new Error(
          message
        );
      }

      const consultaProcesos
        = ( await request.json() ) as ConsultaNumeroRadicacion;

      const {
        procesos
      } = consultaProcesos;

      this.procesos = procesos.map(
        (
          proceso
        ) => {
          return {
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
              : null
          };
        }
      );
      this.idProcesos = procesos.map(
        (
          prc
        ) => {
          return prc.idProceso;
        }
      );
      this.juzgados = procesos.map(
        (
          proceso
        ) => {
          return new NewJuzgado(
            proceso
          );
        }
      );
      return this.procesos;
    } catch ( error ) {
      console.log(
        `${ this.numero } => error en CarpetaBuilder.getProcesos(${ this.numero }) => ${ error }`,
      );
      return null;
    }
  }
  async getActuaciones () {
    try {
      if ( !this.procesos || this.procesos.length === 0 ) {
        throw new Error(
          'no hay idProcesos en esta carpeta'
        );
      }

      const actuacionesMap = new Set<intActuacion>();

      for ( const proceso of this.procesos ) {
        try {
          if ( proceso.esPrivado ) {
            continue;
          }

          const request = await fetch(
            `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ proceso.idProceso }`,
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
          continue;
        }

        console.log(
          `${ this.numero } => hay ${ actuacionesMap.size } en la carpeta numero (${ this.numero })`,
        );
        continue;
      }

      this.actuaciones = Array.from(
        actuacionesMap
      );


      return this.actuaciones;
    } catch ( error ) {
      console.log(
        `${ this.numero } => error en CarpetaBuilder.getActuaciones(${ this.numero })=> ${ error }`,
      );
      return null;
    }
  }
  async createPrismaCarpeta () {
    try {
      const procesosBuilder = this.procesos;

      const prismaCarpetaPlain: Prisma.CarpetaCreateInput = {
        numero      : this.numero
        , llaveProceso: this.llaveProceso
        , nombre      : this.nombre
        , category    : this.category
        , tipoProceso : this.tipoProceso
        , idProcesos  : this.idProcesos
        , revisado    : ( this.category === 'Terminados' )
          ? true
          : false
        , terminado: ( this.category === 'Terminados' )
          ? true
          : false
        , demandas: {
          connectOrCreate: {
            where: {
              idProceso: this.numero
            }
            , create: new PrismaDemanda(
              this
            )
          }
        }
        , deudor: {
          connectOrCreate: {
            where: {
              carpetaNumero: this.numero
            }
            , create: new PrismaDeudor(
              this
            )
          }
        }
      };

      if ( !procesosBuilder || procesosBuilder.length === 0 ) {
        return await client.carpeta.upsert(
          {
            where: {
              numero: this.numero,
            }
            , create: prismaCarpetaPlain
            , update: prismaCarpetaPlain,
          }
        );
      }

      const actuacionesBuilder = this.actuaciones;

      if ( !actuacionesBuilder || actuacionesBuilder.length === 0 ) {
        return await client.carpeta.upsert(
          {
            where: {
              numero: this.numero,
            }
            , create: {
              ...prismaCarpetaPlain
              , idProcesos: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return proceso.idProceso;
                }
              )
              , procesos: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        idProceso: proceso.idProceso
                      }
                      , create: {
                        ...proceso,

                      }
                    };
                  }
                )
              }
              , juzgados: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        tipo: proceso.despacho
                      }
                      , create: new NewJuzgado(
                        proceso
                      )
                    };
                  }
                )
              }
            }
            , update: {
              idProcesos: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return proceso.idProceso;
                }
              )
              , procesos: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        idProceso: proceso.idProceso
                      }
                      , create: {
                        ...proceso,

                      }
                    };
                  }
                )
              }
              , juzgados: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        tipo: proceso.despacho
                      }
                      , create: new NewJuzgado(
                        proceso
                      )
                    };
                  }
                )
              }
            },
          }
        );
      }

      const defUltimaAct = actuacionesBuilder.find(
        (
          actuacion
        ) => {
          return actuacion.isUltimaAct;

        }
      );

      try {
        await client.actuacion.createMany(
          {
            data: actuacionesBuilder.map(
              (
                actuacion
              ) => {
                return {
                  ...actuacion
                  , fechaActuacion: new Date(
                    actuacion.fechaActuacion
                  )
                  , fechaRegistro: new Date(
                    actuacion.fechaRegistro
                  )
                  , fechaFinal: actuacion.fechaFinal
                    ? new Date(
                      actuacion.fechaFinal
                    )
                    : null
                  , fechaInicial: actuacion.fechaInicial
                    ? new Date(
                      actuacion.fechaInicial
                    )
                    : null
                  , idProceso  : actuacion.idProceso
                  , isUltimaAct: actuacion.cant === actuacion.consActuacion
                    ? true
                    : false
                };
              }
            )
          }
        );
      } catch ( error ) {
        console.log(
          error
        );
      }

      if ( defUltimaAct ) {
        return await client.carpeta.upsert(
          {
            where: {
              numero: this.numero,
            }
            , create: {
              ...prismaCarpetaPlain
              , idProcesos: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return proceso.idProceso;
                }
              )
              , procesos: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        idProceso: proceso.idProceso
                      }
                      , create: {
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
                          : null
                      }
                    };
                  }
                )
              }
              , juzgados: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        tipo: proceso.despacho
                      }
                      , create: new NewJuzgado(
                        proceso
                      )
                    };
                  }
                )
              }
              , ultimaActuacion: {
                connectOrCreate: {
                  where: {
                    idRegActuacion: defUltimaAct.idRegActuacion
                  }
                  , create: {
                    ...defUltimaAct
                    , fechaActuacion: new Date(
                      defUltimaAct.fechaActuacion
                    )
                    , fechaRegistro: new Date(
                      defUltimaAct.fechaRegistro
                    )
                    , fechaFinal: defUltimaAct.fechaFinal
                      ? new Date(
                        defUltimaAct.fechaFinal
                      )
                      : null
                    , fechaInicial: defUltimaAct.fechaInicial
                      ? new Date(
                        defUltimaAct.fechaInicial
                      )
                      : null
                    , idProceso  : defUltimaAct.idProceso
                    , isUltimaAct: defUltimaAct.cant === defUltimaAct.consActuacion
                      ? true
                      : false
                  }
                }
              }
              , fecha: new Date(
                defUltimaAct.fechaActuacion
              )
            }
            , update: {
              idProcesos: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return proceso.idProceso;
                }
              )
              , procesos: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        idProceso: proceso.idProceso
                      }
                      , create: {
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
                          : null
                      }
                    };
                  }
                )
              }
              , juzgados: {
                connectOrCreate: procesosBuilder.map(
                  (
                    proceso
                  ) => {
                    return {
                      where: {
                        tipo: proceso.despacho
                      }
                      , create: new NewJuzgado(
                        proceso
                      )
                    };
                  }
                )
              }
              , ultimaActuacion: {
                connectOrCreate: {
                  where: {
                    idRegActuacion: defUltimaAct.idRegActuacion
                  }
                  , create: {
                    ...defUltimaAct
                    , fechaActuacion: new Date(
                      defUltimaAct.fechaActuacion
                    )
                    , fechaRegistro: new Date(
                      defUltimaAct.fechaRegistro
                    )
                    , fechaFinal: defUltimaAct.fechaFinal
                      ? new Date(
                        defUltimaAct.fechaFinal
                      )
                      : null
                    , fechaInicial: defUltimaAct.fechaInicial
                      ? new Date(
                        defUltimaAct.fechaInicial
                      )
                      : null
                    , idProceso  : defUltimaAct.idProceso
                    , isUltimaAct: defUltimaAct.cant === defUltimaAct.consActuacion
                      ? true
                      : false
                  }
                }
              }
              , fecha: defUltimaAct.fechaActuacion
            },
          }
        );
      }

      return await client.carpeta.upsert(
        {
          where: {
            numero: this.numero,
          }
          , create: {
            ...prismaCarpetaPlain
            , idProcesos: procesosBuilder.map(
              (
                proceso
              ) => {
                return proceso.idProceso;
              }
            )
            , procesos: {
              connectOrCreate: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso
                    }
                    , create: {
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
                        : null
                    }
                  };
                }
              )
            }

            , juzgados: {
              connectOrCreate: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      tipo: proceso.despacho
                    }
                    , create: new NewJuzgado(
                      proceso
                    )
                  };
                }
              )
            }
          }
          , update: {
            idProcesos: procesosBuilder.map(
              (
                proceso
              ) => {
                return proceso.idProceso;
              }
            )
            , procesos: {
              connectOrCreate: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso
                    }
                    , create: {
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
                        : null
                    }
                  };
                }
              )
            }
            , juzgados: {
              connectOrCreate: procesosBuilder.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      tipo: proceso.despacho
                    }
                    , create: new NewJuzgado(
                      proceso
                    )
                  };
                }
              )
            }
          },
        }

      );
    } catch ( error ) {
      console.log(
        `${ this.numero } => error at CarpetaBuilder.createPrismaCarpeta(${ this.numero })=> ${ error }`,
      );
      return null;
    }
  }
  async updatePrismaCarpetawithProcesos () {
    try {
      if ( !this.procesos || this.procesos.length === 0 ) {
        throw new Error(
          'no hay procesos en esta carpeta'
        );
      }

      const juzgadosSet = new Set<Juzgado>();

      for ( const proceso of this.procesos ) {
        if ( proceso.esPrivado ) {
          continue;
        }

        const newJuzgado = new NewJuzgado(
          proceso
        );
        juzgadosSet.add(
          newJuzgado
        );
      }

      this.juzgados = Array.from(
        juzgadosSet
      );

      const juzgadosInCarpeta: Prisma.JuzgadoCreateOrConnectWithoutCarpetasInput[]
        = this.juzgados.map(
          (
            juzgado
          ) => {
            return {
              where: {
                tipo: juzgado.tipo,
              }
              , create: {
                ...juzgado,
              },
            };
          }
        );
      return await client.carpeta.upsert(
        {
          where: {
            numero: this.numero,
          }
          , create: {
            nombre      : this.nombre
            , category    : this.category
            , numero      : this.numero
            , tipoProceso : this.tipoProceso
            , llaveProceso: this.procesos[ 0 ].llaveProceso
            , idProcesos  : this.procesos.map(
              (
                prc
              ) => {
                return prc.idProceso;
              }
            )
            , revisado: this.category === 'Terminados'
              ? true
              : false
            , terminado: this.category === 'Terminados'
              ? true
              : false
            , demanda: {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero,
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
            , juzgados: {
              connectOrCreate: juzgadosInCarpeta,
            }
            , procesos: {
              connectOrCreate: this.procesos.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso,
                    }
                    , create: {
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
                    },
                  };
                }
              ),
            },
          }
          , update: {
            juzgados: {
              connectOrCreate: juzgadosInCarpeta,
            }
            , procesos: {
              connectOrCreate: this.procesos.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso,
                    }
                    , create: {
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
                    },
                  };
                }
              ),
            },
          },
        }
      );
    } catch ( error ) {
      console.log(
        `${ this.numero } => error en CarpetaBuilder.updatePrismaCarpetawithProcesos(${ this.numero }) => ${ error }`,
      );
      return null;
    }
  }
}
