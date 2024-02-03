import * as fs from 'fs/promises';
import { tipoProcesoBuilder } from '../data/tipoProcesos';
import { outActuacion, ConsultaActuacion } from '../types/actuaciones';
import { Codeudor,
  Category,
  IntCarpeta,
  TipoProceso, } from '../types/carpetas';
import { outProceso, ConsultaNumeroRadicacion } from '../types/procesos';
import { ClassDemanda, NewJuzgado } from './demanda';
import { ClassDeudor } from './deudor';
import { PrismaClient,  } from '@prisma/client';
import Carpetas from '../data/carpetas';
import { RawDb } from '../types/raw-db';

export const client = new PrismaClient(
  {
    errorFormat: 'pretty',
  }
);

export class NewJudicial implements IntCarpeta {
  id: number;
  actuaciones: outActuacion[] = [];
  category: Category;
  codeudor: Codeudor | null;
  demanda: ClassDemanda;
  deudor: ClassDeudor;
  fecha: Date | null;
  idProcesos: number[] = [];
  idRegUltimaAct: number | null;
  llaveProceso: string;
  nombre: string;
  numero: number;
  procesos: outProceso[] = [];
  revisado: boolean;
  terminado: boolean;
  tipoProceso: TipoProceso;
  ultimaActuacion: outActuacion | null;
  updatedAt: Date;
  constructor(
    rawCarpeta : RawDb, category: Category = 'Bancolombia'
  ) {
    const {
      NUMERO: numero, DEUDOR_CEDULA: cedula, EXPEDIENTE: llaveProceso, DEUDOR_NOMBRE, CODEUDOR_NOMBRE, CODEUDOR_CEDULA, CODEUDOR_DIRECCION, CODEUDOR_TELEFONOS, TIPO_PROCESO
    } = rawCarpeta;
    let idBuilder;

    const cedulaAsNumber = Number(
      cedula
    );

    if ( isNaN(
      cedulaAsNumber
    ) ) {
      idBuilder = Number(
        numero
      );
    } else {
      idBuilder = cedulaAsNumber;
    }

    this.id = idBuilder;
    this.idRegUltimaAct = null;
    this.numero = Number(
      numero
    );
    this.category = category;
    this.deudor = new ClassDeudor(
      rawCarpeta
    );

    this.llaveProceso = String(
      llaveProceso
    );
    this.demanda = new ClassDemanda(
      rawCarpeta
    );
    this.nombre = String(
      DEUDOR_NOMBRE
    );
    this.revisado = false;
    this.codeudor = {
      nombre: CODEUDOR_NOMBRE
        ? String(
          CODEUDOR_NOMBRE
        )
        : null,
      cedula: CODEUDOR_CEDULA
        ? String(
          CODEUDOR_CEDULA
        )
        : null,
      direccion: CODEUDOR_DIRECCION
        ? String(
          CODEUDOR_DIRECCION
        )
        : null,
      telefono: CODEUDOR_TELEFONOS
        ? String(
          CODEUDOR_TELEFONOS
        )
        : null,
      id: this.numero,
    };
    this.tipoProceso = TIPO_PROCESO
      ? tipoProcesoBuilder(
        TIPO_PROCESO
      )
      : 'SINGULAR';

    this.terminado = category === 'Terminados'
      ? true
      : false;
    this.ultimaActuacion = null;
    this.fecha = null;
    this.updatedAt = new Date();
  }
  async getProcesos() {
    try {
      if ( this.llaveProceso === 'SinEspecificar' ) {
        throw new Error(
          'no hay llaveProceso en esta carpeta, aborting'
        );
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`,
      );

      if ( !request.ok ) {
        const json = await request.json();

        const message = `Error
        Judicial.getProcesos.fetchError(${ this.numero }) =>
  ${ JSON.stringify(
    json, null, 2
  ) }
  ${ json }
  ${ request.status }
  ${ request.statusText }
  `;
        throw new Error(
          message
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
          fechaUltimaActuacion: rawProceso.fechaUltimaActuacion
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

        try {
          const prismaUpdateProceso = await client.proceso.upsert(
            {
              where: {
                idProceso: proceso.idProceso,
              },
              create: {
                ...proceso,
                juzgado: {
                  connectOrCreate: {
                    where: {
                      tipo: proceso.juzgado.tipo,
                    },
                    create: proceso.juzgado,
                  },
                },
                carpeta: {
                  connectOrCreate: {
                    where: {
                      numero: this.numero,
                    },
                    create: {
                      id          : this.id,
                      tipoProceso : this.tipoProceso as TipoProceso,
                      llaveProceso: this.llaveProceso,
                      nombre      : this.nombre,
                      fecha       : this.fecha,
                      numero      : this.numero,
                      category    : this.category,
                      idProcesos  : this.idProcesos,
                      revisado    : this.revisado,
                      terminado   : this.terminado,
                      updatedAt   : new Date(),
                    },
                  },
                },
              },
              update: {
                ...proceso,
                juzgado: {
                  connectOrCreate: {
                    where: {
                      tipo: proceso.juzgado.tipo,
                    },
                    create: proceso.juzgado,
                  },
                },
                carpeta: {
                  connectOrCreate: {
                    where: {
                      numero: this.numero,
                    },
                    create: {
                      id          : this.id,
                      tipoProceso : this.tipoProceso as TipoProceso,
                      llaveProceso: this.llaveProceso,
                      nombre      : this.nombre,
                      fecha       : this.fecha,
                      numero      : this.numero,
                      category    : this.category,
                      idProcesos  : this.idProcesos,
                      revisado    : this.revisado,
                      terminado   : this.terminado,
                    },
                  },
                },
              },
            }
          );
          console.log(
            prismaUpdateProceso
          );
        } catch ( e ) {
          console.log(
            `error al insertar el proceso en prisma: ${ e }`
          );
        }

        this.idProcesos.push(
          proceso.idProceso
        );
      }
    } catch ( error ) {
      console.log(
        `${ this.numero } => error en CarpetaBuilder.getProcesos(${ this.numero }) => ${ error }`,
      );
    }
  }
  async getActuaciones() {
    if ( !this.idProcesos ) {
      return;
    }

    for ( const idProceso of this.idProcesos ) {
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

        const consultaActuaciones = ( await request.json() ) as ConsultaActuacion;

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

        const {
          fecha
        } = await client.carpeta.findFirstOrThrow(
          {
            where: {
              numero: this.numero,
            },
          }
        );
        console.log(
          `la fecha guardada en prisma es: ${ fecha }`
        );
        console.log(
          `${
            fecha && fecha < incomingDate
              ? 'la fecha en prisma  es menor que incoming date'
              : 'la fecha en prisma es mayor que incoming dt¡ate '
          }`,
        );

        if (
          !this.fecha
          || !fecha
          || fecha < incomingDate
          || fecha.toString() === 'Invalid Date'
        ) {
          this.fecha = new Date(
            ultimaActuacion.fechaActuacion
          );
          this.ultimaActuacion = {
            ...ultimaActuacion,
            idProceso     : idProceso,
            fechaActuacion: new Date(
              ultimaActuacion.fechaActuacion
            ),
            fechaRegistro: new Date(
              ultimaActuacion.fechaRegistro
            ),
            fechaFinal: ultimaActuacion.fechaFinal
              ? new Date(
                ultimaActuacion.fechaFinal
              )
              : null,
            fechaInicial: ultimaActuacion.fechaInicial
              ? new Date(
                ultimaActuacion.fechaInicial
              )
              : null,
            isUltimaAct:
              ultimaActuacion.cant === ultimaActuacion.consActuacion
                ? true
                : false,
          };
          this.idRegUltimaAct = ultimaActuacion.idRegActuacion;
        }

        this.actuaciones = actuaciones.map(
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

        for ( const actuacion of this.actuaciones ) {
          try {
            await client.actuacion.upsert(
              {
                where: {
                  idRegActuacion: actuacion.idRegActuacion,
                },
                create: {
                  ...actuacion,
                  procesoId    : idProceso,
                  carpetaNumero: this.numero,
                },
                update: {
                  ...actuacion,
                  procesoId    : idProceso,
                  carpetaNumero: this.numero,
                },
              }
            );
          } catch ( e ) {
            console.log(
              `error al insertar las actuaciones en prisma ${ e }`
            );
          }
        }
      } catch ( error ) {
        console.log(
          error, null, 2
        );
        continue;
      }
    }
  }
  async prismaUpdater() {
    try {
      const upserter = await client.carpeta.upsert(
        {
          where: {
            numero: this.numero,
          },
          create: {
            id            : this.id,
            tipoProceso   : this.tipoProceso as TipoProceso,
            llaveProceso  : this.llaveProceso,
            idProcesos    : this.idProcesos,
            nombre        : this.nombre,
            idRegUltimaAct: this.idRegUltimaAct,
            numero        : this.numero,
            category      : this.category,
            fecha         : this.fecha,
            demanda       : {
              connectOrCreate: {
                where: {
                  id: this.numero,
                },
                create: {
                  ...this.demanda,
                  id               : this.numero,
                  medidasCautelares: {
                    connectOrCreate: {
                      where: {
                        demandaId: this.numero,
                      },
                      create: {
                        ...this.demanda.medidasCautelares,
                        id: this.numero,
                      },
                    },
                  },
                  notificacion: {
                    connectOrCreate: {
                      where: {
                        demandaId: this.numero,
                      },
                      create: {
                        autoNotificado: this.demanda.notificacion?.autoNotificado,
                        certimail     : this.demanda.notificacion?.certimail
                          ? this.demanda.notificacion.certimail
                          : false,
                        fisico: this.demanda.notificacion?.fisico
                          ? this.demanda.notificacion.fisico
                          : false,
                        id       : this.numero,
                        notifiers: {
                          create: {
                            fechaAporta  : new Date(),
                            fechaRecibido: new Date(),
                            tipo         : '291',
                            resultado    : true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            deudor: {
              connectOrCreate: {
                where: {
                  id: this.numero,
                },
                create: {
                  primerNombre   : this.deudor.primerNombre,
                  primerApellido : this.deudor.primerApellido,
                  segundoNombre  : this.deudor.segundoNombre,
                  segundoApellido: this.deudor.segundoApellido,
                  email          : this.deudor.email,
                  direccion      : this.deudor.direccion,
                  id             : this.numero,
                  cedula         : String(
                    this.deudor.cedula
                  ),
                  telCelular: this.deudor.telCelular
                    ? String(
                      this.deudor.telCelular
                    )
                    : null,
                  telFijo: this.deudor.telFijo
                    ? String(
                      this.deudor.telFijo
                    )
                    : null,
                },
              },
            },
            codeudor: {
              connectOrCreate: {
                where: {
                  id: this.numero,
                },
                create: {
                  ...this.codeudor,
                  id: this.numero,
                },
              },
            },
            procesos: {
              connectOrCreate: this.procesos?.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso,
                    },
                    create: {
                      ...proceso,
                      juzgado: {
                        connectOrCreate: {
                          where: {
                            tipo: proceso.juzgado.tipo,
                          },
                          create: proceso.juzgado,
                        },
                      },
                      actuaciones: {
                        connectOrCreate: this.actuaciones.map(
                          (
                            actuacion
                          ) => {
                            return {
                              where: {
                                idRegActuacion: actuacion.idRegActuacion,
                              },
                              create: {
                                ...actuacion,
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
                              },
                            };
                          }
                        ),
                      },
                    },
                  };
                }
              ),
            },
          },
          update: {
            llaveProceso  : this.llaveProceso,
            idProcesos    : this.idProcesos,
            nombre        : this.nombre,
            idRegUltimaAct: this.idRegUltimaAct,
            numero        : this.numero,
            category      : this.category,
            fecha         : this.fecha,
            demanda       : {
              connectOrCreate: {
                where: {
                  id: this.numero,
                },
                create: {
                  ...this.demanda,
                  id               : this.numero,
                  medidasCautelares: {
                    connectOrCreate: {
                      where: {
                        demandaId: this.numero,
                      },
                      create: {
                        ...this.demanda.medidasCautelares,
                        id: this.numero,
                      },
                    },
                  },
                  notificacion: {
                    connectOrCreate: {
                      where: {
                        demandaId: this.numero,
                      },
                      create: {
                        autoNotificado: this.demanda.notificacion?.autoNotificado,
                        certimail     : this.demanda.notificacion?.certimail
                          ? this.demanda.notificacion.certimail
                          : false,
                        fisico: this.demanda.notificacion?.fisico
                          ? this.demanda.notificacion.fisico
                          : false,
                        id: this.numero,
                      },
                    },
                  },
                },
              },
            },
            deudor: {
              connectOrCreate: {
                where: {
                  id: this.numero,
                },
                create: {
                  primerNombre   : this.deudor.primerNombre,
                  primerApellido : this.deudor.primerApellido,
                  segundoNombre  : this.deudor.segundoNombre,
                  segundoApellido: this.deudor.segundoApellido,
                  email          : this.deudor.email,
                  direccion      : this.deudor.direccion,
                  id             : this.numero,
                  cedula         : String(
                    this.deudor.cedula
                  ),
                  telCelular: this.deudor.telCelular
                    ? String(
                      this.deudor.telCelular
                    )
                    : null,
                  telFijo: this.deudor.telFijo
                    ? String(
                      this.deudor.telFijo
                    )
                    : null,
                },
              },
            },
            codeudor: {
              connectOrCreate: {
                where: {
                  id: this.numero,
                },
                create: {
                  ...this.codeudor,
                  id: this.numero,
                },
              },
            },
            procesos: {
              connectOrCreate: this.procesos?.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso,
                    },
                    create: {
                      ...proceso,
                      juzgado: {
                        connectOrCreate: {
                          where: {
                            tipo: proceso.juzgado.tipo,
                          },
                          create: proceso.juzgado,
                        },
                      },
                    },
                  };
                }
              ),
            },
          },
        }
      );
      return upserter;
    } catch ( error ) {
      throw new Error(
        `prismaUpdaterError => ${ JSON.stringify(
          error
        ) }`

      );

    }
  }
}

/*
async function* getProcesosIteratorIdk () {
  for ( const carpeta of Carpetas ) {

    const newCarpeta = new NewJudicial(
      carpeta
    );
    console.log(
      `${ carpeta.NUMERO } inicia getProcesos`
    );
    await newCarpeta.getProcesos();
    console.log(
      `${ carpeta.NUMERO } finaliza getProcesos`
    );

    console.log(
      `${ carpeta.NUMERO } inicia getActuaciones`
    );
    await newCarpeta.getActuaciones();
    console.log(
      `${ carpeta.NUMERO } finaliza getActuaciones`
    );

    console.log(
      `${ carpeta.NUMERO } inicia prismaUpdater`
    );
    await newCarpeta.prismaUpdater();
    console.log(
      `${ carpeta.NUMERO } finaliza prismaUpdater`
    );
    yield newCarpeta;
  }
}
 */
async function getProcesosIdk() {
  const newCarpetas = [];

  for ( const carpeta of Carpetas ) {
    const newCarpeta = new NewJudicial(
      carpeta, carpeta.category
    );
    console.log(
      `${ carpeta.NUMERO } inicia getProcesos`
    );
    await newCarpeta.getProcesos();
    console.log(
      `${ carpeta.NUMERO } finaliza getProcesos`
    );

    console.log(
      `${ carpeta.NUMERO } inicia getActuaciones`
    );
    await newCarpeta.getActuaciones();
    console.log(
      `${ carpeta.NUMERO } finaliza getActuaciones`
    );

    console.log(
      `${ carpeta.NUMERO } inicia prismaUpdater`
    );
    await newCarpeta.prismaUpdater();
    console.log(
      `${ carpeta.NUMERO } finaliza prismaUpdater`
    );

    newCarpetas.push(
      newCarpeta
    );
    fs.writeFile(
      `carpetas/${ newCarpeta.numero }/Carpeta.json`,
      JSON.stringify(
        newCarpeta, null, 2
      ),
    );
  }

  /*
  try {
    const collection = await connectToDatabase();

    const upsertOne = await collection.insertMany(
      newCarpetas, {
        ordered        : true
        , ignoreUndefined: true
      }
    );
    console.log(
      `upsert one to mongo: ${ JSON.stringify(
        upsertOne, null, 2
      ) } `
    );

  } catch ( error ) {
    console.log(
      error
    );
  }
 */
  fs.writeFile(
    'Carpetas.json', JSON.stringify(
      newCarpetas, null, 2
    )
  );
}

getProcesosIdk()
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
