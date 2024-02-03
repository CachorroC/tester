import { Juzgado, } from '@prisma/client';
import { Despachos } from '../data/despachos';
import { IntDemanda,
  TipoProceso,
  intNotificacion, } from '../types/carpetas';
import { intProceso } from '../types/procesos';
import { tipoProcesoBuilder } from '../data/tipoProcesos';
import { ClassNotificacion } from './notificacion';
import { RawDb } from '../types/raw-db';
import { Decimal } from '@prisma/client/runtime/library';
import { dateArrayBuilder } from './date-array-builder';
import { capitalBuilder } from './capital-builder';


export function juzgadosByProceso(
  procesos: intProceso[]
) {
  if ( procesos.length === 0 ) {
    return [];
  }

  const juzgados = new Set<Juzgado>();

  for ( const proceso of procesos ) {
    const newJ = new NewJuzgado(
      proceso
    );
    juzgados.add(
      newJ
    );
  }

  return Array.from(
    juzgados
  );
}

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
    ( this.tipo = matchedDespacho
      ? matchedDespacho.nombre
      : proceso.despacho ),
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

export class ClassDemanda implements IntDemanda {
  constructor(
    rawCarpeta: RawDb
  ) {
    const {
      VALOR_CAPITAL_ADEUDADO: capitalAdeudado,
      FECHA_ENTREGA_GARANTIAS_ABOGADO: entregaGarantiasAbogado,
      ETAPA_PROCESAL: etapaProcesal,
      JUZGADO_DEPARTAMENTO: departamento,
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
      OBLIGACION_0: A,
      OBLIGACION_1: B,

    } = rawCarpeta;
    rawCarpeta.FECHA_PRESENTACION_DEMANDA;

    const newFechaOrdenaMedida = fechaOrdenaMedidas
      ? new Date(
        fechaOrdenaMedidas
      )
      : new Date();
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

    const dateMandamientoPago = mandamientoPago
      ? new Date(
        mandamientoPago
      )
      : null;

    if ( !dateMandamientoPago ) {
      this.mandamientoPago = null;
    } else {
      const isValidDate = dateMandamientoPago.toString() !== 'Invalid Date';

      if ( !isValidDate ) {
        this.mandamientoPago = null;
      } else {
        this.mandamientoPago = dateMandamientoPago;
      }
    }

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
  }
  capitalAdeudado: Decimal;
  carpetaNumero!: number;
  departamento: string | null;
  despacho: string | null;
  entregaGarantiasAbogado: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date[];
  id!: number;
  llaveProceso: string | null;
  mandamientoPago: Date | null;
  municipio: string | null;
  notificacion: intNotificacion | null;
  obligacion: string[];
  radicado: string | null;
  tipoProceso: TipoProceso;
  vencimientoPagare: Date[];
  medidasCautelares: { id: number; fechaOrdenaMedida: Date | null; medidaSolicitada: string | null; } | null;

}
