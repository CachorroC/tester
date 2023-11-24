import { PrismaActuacion, PrismaCarpeta,
  PrismaDemanda,
  PrismaDeudor,
  PrismaProceso, } from '../models/prisma-carpeta';
import { NewJuzgado } from '../models/thenable';
import { IntCarpeta } from '../types/carpetas';
import { Actuacion, Juzgado, Prisma, PrismaClient, Proceso } from '@prisma/client';
import { intProceso } from '../types/procesos';
import { intActuacion } from '../types/actuaciones';
import * as fs from 'fs/promises';

const client = new PrismaClient();

export async function insertCarpetaInPrisma(
  carpeta: IntCarpeta
) {
  const {
    numero, procesos, ultimaActuacion
  } = carpeta;

  const newPrismaCarpeta = new PrismaCarpeta(
    carpeta
  );

  try {
    let newCarpeta: Prisma.CarpetaCreateInput;

    if ( !procesos || procesos.length === 0 ) {
      newCarpeta = newPrismaCarpeta;
    } else if ( !ultimaActuacion ) {
      newCarpeta = {
        ...newPrismaCarpeta,
        procesos: {
          connectOrCreate: procesos.map(
            (
              proceso
            ) => {
              const procesoReturn: Prisma.ProcesoCreateOrConnectWithoutCarpetaInput = {
                where: {
                  idProceso: proceso.idProceso
                },
                create: {
                  ...proceso,
                  fechaProceso: proceso.fechaProceso
                    ? new Date(
                      proceso.fechaProceso
                    )
                    : null,
                  fechaUltimaActuacion: proceso.fechaUltimaActuacion
                    ? new Date(
                      proceso.fechaUltimaActuacion
                    )
                    : null,
                }
              };
              return procesoReturn;
            }
          ),

        },
        juzgados: {
          connectOrCreate: procesos.map(
            (
              proceso
            ) => {
              const rawJuzgado = new NewJuzgado(
                proceso
              );

              const juzgado: Prisma.JuzgadoCreateOrConnectWithoutCarpetasInput = {
                where: {
                  tipo: rawJuzgado.tipo
                },
                create: rawJuzgado
              };
              return juzgado;
            }
          ),
        },
      };
    } else {
      newCarpeta = {
        ...newPrismaCarpeta,
        procesos: {
          connectOrCreate: procesos.map(
            (
              proceso
            ) => {
              const procesoReturn: Prisma.ProcesoCreateOrConnectWithoutCarpetaInput = {
                where: {
                  idProceso: proceso.idProceso
                },
                create: {
                  ...proceso,
                  fechaProceso: proceso.fechaProceso
                    ? new Date(
                      proceso.fechaProceso
                    )
                    : null,
                  fechaUltimaActuacion: proceso.fechaUltimaActuacion
                    ? new Date(
                      proceso.fechaUltimaActuacion
                    )
                    : null,
                }
              };
              return procesoReturn;
            }
          ),

        },
        juzgados: {
          connectOrCreate: procesos.map(
            (
              proceso
            ) => {
              const rawJuzgado = new NewJuzgado(
                proceso
              );

              const juzgado: Prisma.JuzgadoCreateOrConnectWithoutCarpetasInput =  {
                where: {
                  tipo: rawJuzgado.tipo
                },
                create: rawJuzgado
              };
              return juzgado;
            }
          ),
        },
        actuaciones: {
          create: {
            ...ultimaActuacion,
            isUltimaAct: ultimaActuacion.cant === ultimaActuacion.consActuacion
              ? true
              : false,
            fechaActuacion: new Date(
              ultimaActuacion.fechaActuacion
            ),
            fechaRegistro: new Date(
              ultimaActuacion.fechaRegistro
            ),
            fechaInicial: ultimaActuacion.fechaInicial
              ? new Date(
                ultimaActuacion.fechaInicial
              )
              : null,
            fechaFinal: ultimaActuacion.fechaFinal
              ? new Date(
                ultimaActuacion.fechaFinal
              )
              : null,
            anotacion: ultimaActuacion.anotacion
              ? ultimaActuacion.anotacion
              : null,
          }

        },
      };
    }

    let createCarpeta;

    try {
      createCarpeta = await client.carpeta.upsert(
        {
          where: {
            numero: numero,
          },
          create: newCarpeta,
          update: newCarpeta,
        }
      );
    } catch ( error ) {
      console.error(
        JSON.stringify(
          error, null, 2
        )
      );
      createCarpeta = await client.carpeta.upsert(
        {
          where: {
            numero: numero
          },
          create: newPrismaCarpeta,
          update: newPrismaCarpeta
        }
      );
    }

    console.log(
      `${ numero }: carpetaInserter: ${ JSON.stringify(
        createCarpeta,
        null,
        2,
      ) }`,
    );
    fs.writeFile(
      `carpetas/${ numero }/prismaCarpetaInserterOutput.json`,
      JSON.stringify(
        createCarpeta
      ),
    );
    return {
      StatusCode: 200,
      Message   : 'ok',
      data      : createCarpeta,
    };
  } catch ( e ) {
    if ( e instanceof Prisma.PrismaClientKnownRequestError ) {
      switch ( e.code ) {
          case 'P2002': {
            console.log(
              `${ numero } ==> Unique constraint failed on the ${
                e.message
              } ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );

            const {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              llaveProceso, ...newNewCarp
            } = newPrismaCarpeta;

            const createCarpeta = await client.carpeta.upsert(
              {
                where: {
                  numero: newPrismaCarpeta.numero
                },
                create: newNewCarp,
                update: newNewCarp
              }
            );
            return {
              StatusCode: 500,
              Message   : e.message,
              data      : createCarpeta,
            };
          }

          case 'P2003': {
            console.log(
              `${ numero } ==> Foreign key constraint failed on the field ${ JSON.stringify(
                e.meta,
                null,
                2,
              ) }`,
            );
            return {
              StatusCode: 301,
              Message   : e.message,
              data      : e.meta,
            };
          }

          default: {
            console.log(
              `${ numero } ==> code: ${ e.code } message: ${
                e.message
              } meta: ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );
            return {
              StatusCode: 300,
              Message   : e.message,
              data      : e.meta,
            };
          }
      }
    }

    return {
      StatusCode: 400,
      Message   : `error at ${ e }`,
      data      : JSON.stringify(
        e, null, 2
      ),
    };
  }
}

export async function insertDemandaInPrisma(
  carpeta: IntCarpeta
) {
  const {
    numero
  } = carpeta;

  try {
    const newPrismaDemanda = new PrismaDemanda(
      carpeta
    );

    const createDemanda = await client.demanda.upsert(
      {
        where: {
          carpetaNumero: numero,
        },
        create: newPrismaDemanda,
        update: newPrismaDemanda,
      }
    );
    return {
      StatusCode: 200,
      Message   : 'ok',
      data      : createDemanda,
    };
  } catch ( e ) {
    if ( e instanceof Prisma.PrismaClientKnownRequestError ) {
      // The .code property can be accessed in a type-safe manner
      switch ( e.code ) {
          case 'P2002': {
            console.log(
              `${ numero } ==> Unique constraint failed on the ${
                e.message
              } ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );
            return {
              StatusCode: 202,
              Message   : e.message,
              data      : e.meta,
            };
          }

          case 'P2003': {
            console.log(
              `${ numero } ==> Foreign key constraint failed on the field ${ JSON.stringify(
                e.meta,
                null,
                2,
              ) }`,
            );
            return {
              StatusCode: 203,
              Message   : e.message,
              data      : e.meta,
            };
          }

          default: {
            console.log(
              `${ numero } ==> code: ${ e.code } message: ${
                e.message
              } meta: ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );
            return {
              StatusCode: 300,
              Message   : e.message,
              data      : e.meta,
            };
          }
      }
    }

    return {
      StatusCode: 400,
      Message   : `error at ${ e }`,
      data      : JSON.stringify(
        e, null, 2
      ),
    };
  }
}

export async function insertDeudorInPrisma(
  carpeta: IntCarpeta
) {
  const {
    numero
  } = carpeta;

  try {
    const newPrismaDeudor = new PrismaDeudor(
      carpeta
    );

    const createDeudor = await client.deudor.upsert(
      {
        where: {
          carpetaNumero: numero,
        },
        create: newPrismaDeudor,
        update: newPrismaDeudor,
      }
    );
    return {
      StatusCode: 200,
      Message   : 'ok',
      data      : createDeudor,
    };
  } catch ( e ) {
    if ( e instanceof Prisma.PrismaClientKnownRequestError ) {
      // The .code property can be accessed in a type-safe manner
      switch ( e.code ) {
          case 'P2002': {
            console.log(
              `${ numero } ==> Unique constraint failed on the ${
                e.message
              } ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );
            return {
              StatusCode: 202,
              Message   : e.message,
              data      : e.meta ?? e.message,
            };
          }

          case 'P2003': {
            console.log(
              `${ numero } ==> Foreign key constraint failed on the field ${ JSON.stringify(
                e.meta,
                null,
                2,
              ) }`,
            );
            return {
              StatusCode: 203,
              Message   : e.message,
              data      : e.meta ?? e.message,
            };
          }

          default: {
            console.log(
              `${ numero } ==> code: ${ e.code } message: ${
                e.message
              } meta: ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );
            return {
              StatusCode: 300,
              Message   : e.message,
              data      : e.meta ?? e.message,
            };
          }
      }
    }

    return {
      StatusCode: 400,
      Message   : `error at ${ e }`,
      data      : JSON.stringify(
        e, null, 2
      ),
    };
  }
}


export async function insertJuzgadoInPrisma (
  carpeta: IntCarpeta
) {
  const {
    numero
  } = carpeta;

  const outputJuzgados = new Set<Juzgado>();

  try {
    if ( !carpeta.procesos || carpeta.procesos.length === 0 ) {
      throw new Error(
        'no hay procesos en la carpeta por lo tanto no se pueden crear juzgados, error.'
      );
    }

    for ( const proceso of carpeta.procesos ) {
      const juzgado = new NewJuzgado(
        proceso
      );

      const insetJuzgado = await client.juzgado.upsert(
        {
          where: {
            tipo: juzgado.tipo
          },
          create: juzgado,
          update: juzgado
        }
      );
      outputJuzgados.add(
        insetJuzgado
      );
      continue;
    }

    return {
      StatusCode: 200,
      Message   : 'ok',
      data      : Array.from(
        outputJuzgados
      )
    };
  } catch ( e ) {

    if ( e instanceof Prisma.PrismaClientKnownRequestError ) {
      switch ( e.code ) {
          case 'P2002': {
            console.log(
              `${ numero } ==> Unique constraint failed on the ${
                e.message
              } ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );
            return {
              StatusCode: 302,
              Message   : e.message,
              data      : e.meta,
            };
          }

          case 'P2003': {
            console.log(
              `${ numero } ==> Foreign key constraint failed on the field ${ JSON.stringify(
                e.meta,
                null,
                2,
              ) }`,
            );
            return {
              StatusCode: 302,
              Message   : e.message,
              data      : e.meta,
            };
          }

          default: {
            console.log(
              `${ numero } ==> code: ${ e.code } message: ${
                e.message
              } meta: ${ JSON.stringify(
                e.meta, null, 2
              ) }`,
            );
            return {
              StatusCode: 300,
              Message   : e.message,
              data      : e.meta,
            };
          }
      }
    }

    return {
      StatusCode: 400,
      Message   : `error at ${ e }`,
      data      : JSON.stringify(
        e, null, 2
      ),
    };
  }
}


export async function insertProcesosInPrisma (
  procesos: intProceso[]
) {
  const finalProcesos = new Set<Proceso>();

  for ( const proceso of procesos ) {
    try {
      const newPrismaProceso = new PrismaProceso(
        proceso
      );

      const createProceso = await client.proceso.create(
        {
          data: newPrismaProceso
        }
      );
      finalProcesos.add(
        createProceso
      );
    } catch ( e ) {
      if ( e instanceof Prisma.PrismaClientKnownRequestError ) {
        // The .code property can be accessed in a type-safe manner
        switch ( e.code ) {
            case 'P2002': {
              console.log(
                `${ proceso.idProceso } ==> Unique constraint failed on the ${ e.message
                } ${ JSON.stringify(
                  e.meta, null, 2
                ) }`,
              );

            }

              break;

            case 'P2003': {
              console.log(
                `${ proceso.idProceso } ==> Foreign key constraint failed on the field ${ JSON.stringify(
                  e.meta,
                  null,
                  2,
                ) }`,
              );

            }

              break;
            default: {
              console.log(
                `${ proceso.idProceso } ==> code: ${ e.code } message: ${ e.message
                } meta: ${ JSON.stringify(
                  e.meta, null, 2
                ) }`,
              );

            }

              break;
        }
      }


    }
  }

  return Array.from(
    finalProcesos
  );
}

export async function insertActuacionesInPrisma (
  actuaciones: intActuacion[]
) {
  const finalActuaciones = new Set<Actuacion>();

  for ( const actuacion of actuaciones ) {
    try {
      const newPrismaActuacion = new PrismaActuacion(
        actuacion
      );

      const createActuacion = await client.actuacion.create(
        {
          data: newPrismaActuacion
        }
      );
      finalActuaciones.add(
        createActuacion
      );
    } catch ( e ) {
      if ( e instanceof Prisma.PrismaClientKnownRequestError ) {
        // The .code property can be accessed in a type-safe manner
        switch ( e.code ) {
            case 'P2002': {
              console.log(
                `${ actuacion.llaveProceso } ==> Unique constraint failed on the ${ e.message
                } ${ JSON.stringify(
                  e.meta, null, 2
                ) }`,
              );

            }

              break;

            case 'P2003': {
              console.log(
                `${ actuacion.llaveProceso } ==> Foreign key constraint failed on the field ${ JSON.stringify(
                  e.meta,
                  null,
                  2,
                ) }`,
              );

            }

              break;
            default: {
              console.log(
                `${ actuacion.llaveProceso } ==> code: ${ e.code } message: ${ e.message
                } meta: ${ JSON.stringify(
                  e.meta, null, 2
                ) }`,
              );

            }

              break;
        }
      }


    }
  }

  return Array.from(
    finalActuaciones
  );
}