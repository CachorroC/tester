import { IntDemanda, TipoProceso, intNotificacion } from '../types/carpetas';
import { tipoProcesoBuilder } from '../data/tipoProcesos';
import { ClassNotificacion } from './notificacion';
import { RawDb } from '../types/raw-db';
import { Decimal } from '@prisma/client/runtime/library';
import { dateArrayBuilder } from './date-array-builder';
import { capitalBuilder } from './capital-builder';
import { client } from '../services/prisma';

export class ClassDemanda implements IntDemanda {
  constructor(
    rawCarpeta: RawDb 
  ) {
    const {
      CAPITAL_ADEUDADO: capitalAdeudado,
      FECHA_ENTREGA_GARANTIAS_ABOGADO: entregaGarantiasAbogado,
      ETAPA_PROCESAL: etapaProcesal,
      DEPARTAMENTO: departamento,
      NUMERO,
      FECHA_PRESENTACION_DEMANDA: fechaPresentacion,
      TIPO_PROCESO: tipoProceso,
      FECHA_MANDAMIENTO_PAGO: mandamientoPago,
      JUZGADO_CIUDAD: municipio,
      RADICADO: radicado,
      EXPEDIENTE: llaveProceso,
      FECHA_VENCIMIENTO_PAGARE: vencimientoPagare,
      FECHA_ORDENA_MEDIDAS_CAUTELARES: fechaOrdenaMedidas,
      MEDIDA_SOLICITADA: medidaSolicitada,
      OBLIGACION_1: A,
      OBLIGACION_2: B,
      VALOR_LIQUIDACION_DEL_CREDITO,
      VALOR_AVALUO,
    } = rawCarpeta;
    rawCarpeta.FECHA_PRESENTACION_DEMANDA;

    const newFechaOrdenaMedida = fechaOrdenaMedidas
      ? new Date(
        fechaOrdenaMedidas 
      )
      : new Date();
    this.id = Number(
      NUMERO 
    );
    this.medidasCautelares = {
      id: Number(
        NUMERO 
      ),
      fechaOrdenaMedida:
        newFechaOrdenaMedida.toString() === 'Invalid Date'
          ? null
          : newFechaOrdenaMedida,
      medidaSolicitada: medidaSolicitada
        ? String(
          medidaSolicitada 
        )
        : null,
    };

    const obligacionesSet = new Set<string>();

    if ( A ) {
      obligacionesSet.add(
        String(
          A 
        ) 
      );
    }

    if ( B ) {
      obligacionesSet.add(
        String(
          B 
        ) 
      );
    }

    this.fechaPresentacion = dateArrayBuilder(
      fechaPresentacion 
    );
    this.notificacion = new ClassNotificacion(
      rawCarpeta 
    );
    this.mandamientoPago = dateArrayBuilder(
      mandamientoPago 
    );

    const dateEntregaGarantiasAbogado = entregaGarantiasAbogado
      ? new Date(
        entregaGarantiasAbogado 
      )
      : null;

    if ( !dateEntregaGarantiasAbogado ) {
      this.entregaGarantiasAbogado = null;
    } else {
      const isValidDate
        = dateEntregaGarantiasAbogado.toString() !== 'Invalid Date';

      if ( !isValidDate ) {
        this.entregaGarantiasAbogado = null;
      } else {
        this.entregaGarantiasAbogado = dateEntregaGarantiasAbogado;
      }
    }

    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado 
    );

    this.tipoProceso = tipoProcesoBuilder(
      tipoProceso 
    );
    this.etapaProcesal = etapaProcesal
      ? `${ etapaProcesal }`
      : null;
    this.municipio = municipio
      ? String(
        municipio 
      )
      : null;
    this.obligacion = Array.from(
      obligacionesSet 
    );
    this.radicado = radicado
      ? `${ radicado }`
      : null;
    this.vencimientoPagare = dateArrayBuilder(
      vencimientoPagare 
    );
    this.departamento = departamento
      ? departamento
      : null;
    this.despacho = null;
    this.llaveProceso = llaveProceso
      ? String(
        llaveProceso 
      )
      : null;
    this.avaluo = capitalBuilder(
      VALOR_AVALUO 
    );
    this.liquidacion = capitalBuilder(
      VALOR_LIQUIDACION_DEL_CREDITO 
    );
  }
  liquidacion: Decimal;
  avaluo: Decimal;
  capitalAdeudado: Decimal;
  carpetaNumero!: number;
  departamento: string | null;
  despacho: string | null;
  entregaGarantiasAbogado: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date[];
  id: number;
  llaveProceso: string | null;
  mandamientoPago: Date[];
  municipio: string | null;
  notificacion: intNotificacion;
  obligacion: string[];
  radicado: string | null;
  tipoProceso: TipoProceso;
  vencimientoPagare: Date[];
  medidasCautelares: {
    id: number;
    fechaOrdenaMedida: Date | null;
    medidaSolicitada: string | null;
  };
  async prismaUpdateDemanda() {
    try {
      const upserter = await client.demanda.upsert(
        {
          where: {
            id: this.id,
          },
          create: {
            municipio              : this.municipio,
            obligacion             : this.obligacion,
            radicado               : this.radicado,
            vencimientoPagare      : this.vencimientoPagare,
            tipoProceso            : this.tipoProceso,
            capitalAdeudado        : this.capitalAdeudado,
            departamento           : this.departamento,
            id                     : this.id,
            despacho               : this.despacho,
            entregaGarantiasAbogado: this.entregaGarantiasAbogado,
            etapaProcesal          : this.etapaProcesal,
            fechaPresentacion      : this.fechaPresentacion,
            llaveProceso           : this.llaveProceso,
            mandamientoPago        : this.mandamientoPago,
            notificacion           : {
              connectOrCreate: {
                where: {
                  id: this.id,
                },
                create: {
                  ...this.notificacion,
                  id       : this.id,
                  notifiers: {
                    createMany: {
                      data          : this.notificacion?.notifiers ?? [],
                      skipDuplicates: true,
                    },
                  },
                },
              },
            },
            carpeta: {
              connect: {
                numero: this.id,
              },
            },
            medidasCautelares: {
              connectOrCreate: {
                where: {
                  id: this.id,
                },
                create: {
                  fechaOrdenaMedida: this.medidasCautelares?.fechaOrdenaMedida,
                  id               : this.id,
                  medidaSolicitada : this.medidasCautelares?.medidaSolicitada,
                },
              },
            },
          },
          update: {
            municipio              : this.municipio,
            obligacion             : this.obligacion,
            radicado               : this.radicado,
            vencimientoPagare      : this.vencimientoPagare,
            tipoProceso            : this.tipoProceso,
            capitalAdeudado        : this.capitalAdeudado,
            departamento           : this.departamento,
            id                     : this.id,
            despacho               : this.despacho,
            entregaGarantiasAbogado: this.entregaGarantiasAbogado,
            etapaProcesal          : this.etapaProcesal,
            fechaPresentacion      : this.fechaPresentacion,
            llaveProceso           : this.llaveProceso,
            mandamientoPago        : this.mandamientoPago,
            notificacion           : {
              connectOrCreate: {
                where: {
                  id: this.id,
                },
                create: {
                  ...this.notificacion,
                  id       : this.id,
                  notifiers: {
                    createMany: {
                      data          : this.notificacion?.notifiers ?? [],
                      skipDuplicates: true,
                    },
                  },
                },
              },
            },
            carpeta: {
              connect: {
                numero: this.id,
              },
            },
            medidasCautelares: {
              connectOrCreate: {
                where: {
                  id: this.id,
                },
                create: {
                  fechaOrdenaMedida: this.medidasCautelares?.fechaOrdenaMedida,
                  id               : this.id,
                  medidaSolicitada : this.medidasCautelares?.medidaSolicitada,
                },
              },
            },
          },
        } 
      );
      return upserter;
    } catch ( error ) {
      console.log(
        `ClassDemanda prismaUpdateDemanda ${ JSON.stringify(
          error 
        ) }` 
      );
      return null;
    }
  }
}
