import { Prisma } from "@prisma/client";
import { intNotificacion, intNotifier } from "../types/carpetas";
import { RawDb } from "../types/raw-db";

export class ClassNotificacion implements intNotificacion {
  constructor(rawDb: RawDb) {
    const {
      FISICO: fisico,
      CERTIMAIL: certimail,
      FECHA_AUTO_NOTIFICADO: autoNotificado,
      NUMERO,
      FECHA_RECIBO_291: fechaRecibido291,
      FECHA_APORTA_NOTIFICACION_291: fechaAporta291,
      RESULTADO_291: resultado291,
      FECHA_RECIBO_AVISO_292: fechaRecibido292,
      FECHA_APORTA_NOTIFICACION_292: fechaAporta292,
      RESULTADO_292: resultado292,
    } = rawDb;
    this.id = Number(NUMERO);
    this.certimail = certimail ? (certimail === "SI" ? true : false) : null;
    this.fisico = fisico ? (fisico === "SI" ? true : false) : null;
    this.autoNotificado = autoNotificado ? new Date(autoNotificado) : null;

    if (autoNotificado) {
      const newAutoDate = new Date(autoNotificado);

      if (newAutoDate.toString() === "Invalid Date") {
        this.autoNotificado = null;
      } else {
        this.autoNotificado = newAutoDate;
      }
    } else {
      this.autoNotificado = null;
    }

    const newFechaRecibido291 = fechaRecibido291
      ? new Date(fechaRecibido291)
      : null;

    const newFechaAporta291 = fechaAporta291 ? new Date(fechaAporta291) : null;

    const newResultado291 = resultado291
      ? resultado291 === "POSITIVO" || resultado291 === "ABIERTO"
        ? true
        : false
      : null;
    this.notifiers.push({
      tipo: "291",
      fechaRecibido: newFechaRecibido291,
      fechaAporta: newFechaAporta291,
      resultado: newResultado291,
      carpetaNumero: Number(NUMERO),
    });

    const newFechaRecibido292 = fechaRecibido292
      ? new Date(fechaRecibido292)
      : null;

    const newFechaAporta292 = fechaAporta292 ? new Date(fechaAporta292) : null;

    const newResultado292 = resultado292
      ? resultado292 === "POSITIVO" || resultado292 === "ABIERTO"
        ? true
        : false
      : null;
    this.notifiers.push({
      tipo: "292",
      fechaRecibido: newFechaRecibido292,
      fechaAporta: newFechaAporta292,
      resultado: newResultado292,
      carpetaNumero: Number(NUMERO),
    });
  }
  id: number;
  notifiers: intNotifier[] = [];
  certimail: boolean | null;
  fisico: boolean | null;
  autoNotificado: Date | null;

  static prismaNotificacion(notificacion: intNotificacion) {
    const newNotificacion: Prisma.NotificacionCreateWithoutDemandaInput = {
      id: notificacion.id,
      autoNotificado: notificacion.autoNotificado,
      certimail: notificacion.certimail,
      fisico: notificacion.fisico,
      notifiers: {
        connectOrCreate: notificacion.notifiers.map((notif) => {
          const notifCarpetaInput: Prisma.NotifierTipoCarpetaNumeroCompoundUniqueInput =
            {
              tipo: notif.tipo,
              carpetaNumero: notif.carpetaNumero,
            };

          const notifierConnectOrCreate: Prisma.NotifierCreateOrConnectWithoutNotificacionInput =
            {
              where: {
                tipo_carpetaNumero: notifCarpetaInput,
              },
              create: {
                tipo: notif.tipo,
                carpetaNumero: notif.carpetaNumero,
                fechaAporta: notif.fechaAporta,
                fechaRecibido: notif.fechaRecibido,
                resultado: notif.resultado,
              },
            };

          return notifierConnectOrCreate;
        }),
      },
    };
    return newNotificacion;
  }
}
