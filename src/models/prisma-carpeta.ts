import { Prisma } from '@prisma/client';
import { client } from '../services/prisma';
import { Carpeta } from './carpeta';
import { ClassDeudor } from './deudor';
import { ClassDemanda } from './demanda';

export class PrismaCarpeta {
  static async insertCarpeta(
    incomingCarpeta: Carpeta 
  ) {
    const {
      idRegUltimaAct,
      ultimaActuacion,
      procesos,
      actuaciones,
      demanda,
      deudor,
      codeudor,
      notas,
    } = incomingCarpeta;
    console.log(
      idRegUltimaAct 
    );

    const newDemanda = ClassDemanda.prismaDemanda(
      demanda 
    );

    const newDeudor = ClassDeudor.prismaDeudor(
      deudor 
    );

    const newCarpeta = Carpeta.prismaCarpeta(
      incomingCarpeta 
    );

    const inserter = await client.carpeta.upsert(
      {
        where: {
          numero: incomingCarpeta.numero,
        },
        create: {
          ...newCarpeta,
          ultimaActuacion: ultimaActuacion
            ? {
                connectOrCreate: {
                  where: {
                    idRegActuacion: ultimaActuacion.idRegActuacion,
                  },
                  create: {
                    ...ultimaActuacion,
                  },
                },
              }
            : undefined,
          deudor: {
            connectOrCreate: {
              where: {
                id: incomingCarpeta.numero,
              },
              create: newDeudor,
            },
          },
          demanda: {
            connectOrCreate: {
              where: {
                id: incomingCarpeta.numero,
              },
              create: newDemanda,
            },
          },
          codeudor: {
            connectOrCreate: {
              where: {
                id: incomingCarpeta.numero,
              },
              create: {
                ...codeudor,
              },
            },
          },
          notas: {
            connectOrCreate: notas.map(
              (
                nota 
              ) => {
                const notaConnectOrCreate: Prisma.NotaCreateOrConnectWithoutCarpetaInput
              = {
                where: {
                  text: nota.text,
                },
                create: {
                  ...nota,
                },
              };
                return notaConnectOrCreate;
              } 
            ),
          },
          procesos: {
            connectOrCreate: procesos.map(
              (
                proceso 
              ) => {
                const {
                  juzgado, ...restProceso 
                } = proceso;

                const procesoCreateorConnect: Prisma.ProcesoCreateOrConnectWithoutCarpetaInput
              = {
                where: {
                  idProceso: proceso.idProceso,
                },
                create: {
                  ...restProceso,
                  juzgado: {
                    connectOrCreate: {
                      where: {
                        tipo: juzgado.tipo,
                      },
                      create: {
                        ...juzgado,
                      },
                    },
                  },
                  actuaciones: {
                    connectOrCreate: actuaciones.map(
                      (
                        actuacion 
                      ) => {
                        const actuacionCreateOrConnect: Prisma.ActuacionCreateOrConnectWithoutCarpetaInput
                        = {
                          where: {
                            idRegActuacion: actuacion.idRegActuacion,
                          },
                          create: {
                            ...actuacion,
                          },
                        };
                        return actuacionCreateOrConnect;
                      } 
                    ),
                  },
                },
              };

                return procesoCreateorConnect;
              } 
            ),
          },
        },
        update: {
          ...newCarpeta,
        },
      } 
    );
    console.log(
      inserter 
    );
  }
}
