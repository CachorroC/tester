import { Notificacion,  Prisma } from '@prisma/client';
import { IntCarpeta,  intNotificacion,  intNotifier,  rawNotificacion } from '../types/carpetas';
import { fixSingleFecha } from './idk';
import { client } from './carpeta';

export class ClassNotificacion implements intNotificacion {
  constructor(
    notificacion: rawNotificacion
  ) {
    const {
      fisico, certimail, autoNotificado
    }
      = notificacion;
    this.certimail = certimail
      ? certimail === 'SI'
        ? true
        : false
      : null;
    this.fisico = fisico
      ? fisico === 'SI'
        ? true
        : false
      : null;
    this.autoNotificado = autoNotificado
      ? typeof autoNotificado === 'number'
        ? autoNotificado.toString()
        : autoNotificado
      : null;

    const notifiersBuilder = new Map();

    const the291 = notificacion[ '291' ];

    if ( the291 ) {
      const {
        fechaRecibido, resultado, fechaAporta
      }
        = the291;

      const newFechaRecibido = fechaRecibido
        ? fixSingleFecha(
          typeof fechaRecibido === 'number'
            ? fechaRecibido.toString()
            : fechaRecibido
        )
        : null;

      const newFechaAporta = fechaAporta
        ? fixSingleFecha(
          typeof fechaAporta === 'number'
            ? fechaAporta.toString()
            : fechaAporta
        )
        : null;

      const newResultado = resultado
        ? resultado === 'POSITIVO'
          ? true
          : false
        : null;
      notifiersBuilder.set(
        291,
        {
          tipo         : '291'
          , fechaRecibido: newFechaRecibido
          , fechaAporta  : newFechaAporta
          , resultado    : newResultado,
        }
      );
    }

    const the292 = notificacion[ '292' ];

    if ( the292 ) {
      const {
        fechaRecibido, resultado, fechaAporta
      }
        = the292;

      const newFechaRecibido = fechaRecibido
        ? fixSingleFecha(
          fechaRecibido
        )
        : null;

      const newFechaAporta = fechaAporta
        ? fixSingleFecha(
          typeof fechaAporta === 'number'
            ? fechaAporta.toString()
            : fechaAporta
        )
        : null;

      const newResultado = resultado
        ? resultado === 'POSITIVO'
          ? true
          : false
        : null;
      notifiersBuilder.set(
        292,
        {
          tipo         : '292'
          , fechaRecibido: newFechaRecibido
          , fechaAporta  : newFechaAporta
          , resultado    : newResultado,
        }
      );
    }

    this.notifiers = Array.from(
      notifiersBuilder.values()
    );

  }
  notifiers: intNotifier[];
  certimail: boolean | null;
  fisico: boolean | null;
  autoNotificado: string | null;
}

export class PrismaNotificacion implements Notificacion {
  id!: number;
  carpetaNumero!: number;
  notifiers?: Prisma.NotifierUncheckedCreateNestedManyWithoutNotificacionInput;

  constructor (
    {
      notificacion
    }: IntCarpeta
  ) {
    this.certimail = notificacion
      ? notificacion.certimail
      : null;
    this.fisico = notificacion
      ? notificacion.fisico
      : null;
    this.autoNotificado = notificacion
      ? notificacion.autoNotificado
      : null;

    if ( notificacion ) {

      this.notifiers = {
        createMany: {
          data: notificacion.notifiers.map(
            (
              notif
            ) => {
              return {
                tipo       : notif.tipo
                , fechaAporta: notif.fechaAporta
                  ? new Date(
                    notif.fechaAporta
                  )
                  : null
                , fechaRecibido: notif.fechaRecibido
                  ? new Date(
                    notif.fechaRecibido
                  )
                  : null
                , resultado: notif.resultado
                  ? notif.resultado
                  : null
              };
            }
          )
          , skipDuplicates: true
        }
      };
    }
  }
  certimail: boolean | null;
  fisico: boolean | null;
  autoNotificado: string | null;
  async prismaCreateNotificacion () {

    try {
      return await client.notificacion.upsert(
        {
          where: {
            carpetaNumero: this.carpetaNumero
          }
          , create: this
          , update: this
        }
      );
    } catch ( error ) {
      console.log(
        `error PrismaNotificacion.PrismaCreateNotificacion => ${ this.carpetaNumero } => ${ error }`
      );
      return null;
    }
  }
}