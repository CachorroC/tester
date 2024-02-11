import { Prisma } from "@prisma/client";
import { client } from "../services/prisma";
import { Carpeta } from "./carpeta";
import { ClassDeudor } from "./deudor";
import { ClassNotificacion } from "./notificacion";

export class PrismaCarpeta {
  static async insertCarpeta(incomingCarpeta: Carpeta) {
    const {
      idRegUltimaAct,
      ultimaActuacion,
      procesos,
      actuaciones,
      demanda,
      deudor,
      codeudor,
      notas,
      ...restCarpeta
    } = incomingCarpeta;
    console.log(idRegUltimaAct);

    const { medidasCautelares, notificacion } = demanda;

    const newMedidas: Prisma.MedidasCautelaresCreateWithoutDemandaInput = {
      id: incomingCarpeta.numero,
      fechaOrdenaMedida: medidasCautelares.fechaOrdenaMedida,
      medidaSolicitada: medidasCautelares.medidaSolicitada,
    };

    const newNotificacion: Prisma.NotificacionCreateWithoutDemandaInput =
      ClassNotificacion.prismaNotificacion(notificacion);

    const newDemanda: Prisma.DemandaCreateWithoutCarpetaInput = {
      id: incomingCarpeta.numero,
      tipoProceso: demanda.tipoProceso,
      avaluo: demanda.avaluo,
      capitalAdeudado: demanda.capitalAdeudado,
      departamento: demanda.departamento,
      despacho: demanda.despacho,
      entregaGarantiasAbogado: demanda.entregaGarantiasAbogado,
      fechaPresentacion: demanda.fechaPresentacion,
      etapaProcesal: demanda.etapaProcesal,
      liquidacion: demanda.liquidacion,
      llaveProceso: demanda.llaveProceso,
      mandamientoPago: demanda.mandamientoPago,
      municipio: demanda.municipio,
      obligacion: demanda.obligacion,
      radicado: demanda.radicado,
      medidasCautelares: {
        connectOrCreate: {
          where: {
            id: incomingCarpeta.numero,
          },
          create: newMedidas,
        },
      },
      notificacion: {
        connectOrCreate: {
          where: {
            id: incomingCarpeta.numero,
          },
          create: newNotificacion,
        },
      },
    };

    const newDeudor = ClassDeudor.prismaDeudor(deudor);

    try {
      const inserter = await client.carpeta.create({
        data: {
          ...restCarpeta,
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
            connectOrCreate: notas.map((nota) => {
              const notaConnectOrCreate: Prisma.NotaCreateOrConnectWithoutCarpetaInput =
                {
                  where: {
                    text: nota.text,
                  },
                  create: {
                    ...nota,
                  },
                };
              return notaConnectOrCreate;
            }),
          },
          procesos: {
            connectOrCreate: procesos.map((proceso) => {
              const { juzgado, ...restProceso } = proceso;

              const procesoCreateorConnect: Prisma.ProcesoCreateOrConnectWithoutCarpetaInput =
                {
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
                      connectOrCreate: actuaciones.map((actuacion) => {
                        const actuacionCreateOrConnect: Prisma.ActuacionCreateOrConnectWithoutCarpetaInput =
                          {
                            where: {
                              idRegActuacion: actuacion.idRegActuacion,
                            },
                            create: {
                              ...actuacion,
                            },
                          };
                        return actuacionCreateOrConnect;
                      }),
                    },
                  },
                };

              return procesoCreateorConnect;
            }),
          },
        },
      });
      console.log(inserter);
    } catch (error) {
      throw new Error("");
    }
  }
}
