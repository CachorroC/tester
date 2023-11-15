import { PrismaCarpeta,
  PrismaDemanda,
  PrismaDeudor, } from '../models/prisma-carpeta';
import { NewJuzgado } from '../models/thenable';
import { IntCarpeta } from '../types/carpetas';
import { Prisma, PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function insertCarpetaInPrisma(
  carpeta: IntCarpeta
) {
  const {
    numero, procesos, ultimaActuacion
  } = carpeta;

  try {
    const newPrismaCarpeta = new PrismaCarpeta(
      carpeta
    );
    let newCarpeta: Prisma.CarpetaCreateInput;

    if ( !procesos || procesos.length === 0 ) {
      newCarpeta = newPrismaCarpeta;
    } else if ( !ultimaActuacion ) {
      newCarpeta = {
        ...newPrismaCarpeta,
        procesos: {
          createMany: {
            data: procesos.map(
              (
                proceso
              ) => {
                return {
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
                };
              }
            ),
          },
        },
        juzgados: {
          create: procesos.map(
            (
              proceso
            ) => {
              return new NewJuzgado(
                proceso
              );
            }
          ),
        },
      };
    } else {
      newCarpeta = {
        ...newPrismaCarpeta,
        procesos: {
          createMany: {
            data: procesos.map(
              (
                proceso
              ) => {
                return {
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
                };
              }
            ),
          },
        },
        actuaciones: {
          create: {
            ...ultimaActuacion,
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
          },
        },
      };
    }

    const createCarpeta = await client.carpeta.upsert(
      {
        where: {
          numero: numero,
        },
        create: newCarpeta,
        update: newPrismaCarpeta,
      }
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

export async function insertDemandaInPrisma(
  carpeta: IntCarpeta
) {
  const {
    numero, demanda
  } = carpeta;

  try {
    const newPrismaDemanda = new PrismaDemanda(
      demanda, numero
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
    numero, deudor
  } = carpeta;

  try {
    const newPrismaDeudor = new PrismaDeudor(
      deudor, numero
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
