import { Juzgado } from '@prisma/client';
import { Despachos } from '../data/despachos';
import { DemandaRaw, IntDemanda,  TipoProceso, intNotificacion } from '../types/carpetas';
import { intProceso } from '../types/procesos';
import { tipoProcesoBuilder } from '../data/tipoProcesos';

function vencimientoPagareFixer(
  rawVencimientoPagare?: string | number
) {
  if ( !rawVencimientoPagare ) {
    return [];
  }

  let stringPagare;

  if ( typeof rawVencimientoPagare === 'number' ) {
    stringPagare = rawVencimientoPagare.toString();
  } else {
    stringPagare = rawVencimientoPagare;
  }

  const pagaresDateSet = new Set<Date | null>();

  const matcherPagare = stringPagare.split(
    '//'
  );
  console.log(
    `hay ${ matcherPagare?.length } pagarés en este proceso`
  );

  for ( const pagare of matcherPagare ) {
    const newPagareString = pagare.trim()
      .replace(
        '/', '-'
      );

    const regexMatchStringYear = newPagareString.match(
      /\d{4}/g
    );

    const regexMatchStringMonth = newPagareString.match(
      /-\d{1,2}-/g
    );
    console.log(
      regexMatchStringYear
    );

    const monthConGuiones = regexMatchStringMonth
      ? regexMatchStringMonth[ 0 ]
      : '-01-';

    const month = monthConGuiones.replaceAll(
      '-', ''
    );

    const year = regexMatchStringYear
      ? regexMatchStringYear[ 0 ]
      : '2015';

    const stringDate = new Date(
      Number(
        year
      ), Number(
        month
      ) - 1
    );

    console.log(
      `la nueva fecha del pagaré arrojó: ${ stringDate.toDateString() }`,
    );

    if ( !stringDate || stringDate.toString() === 'Invalid Date' ) {
      pagaresDateSet.add(
        null
      );
    }

    pagaresDateSet.add(
      stringDate
    );
  }

  if ( pagaresDateSet.size === 0 ) {
    return [];
  }

  return Array.from(
    pagaresDateSet
  );
}

function capitalBuilder(
  capitalAdeudado: string | number
) {
  let moneyBuilder;

  if ( typeof capitalAdeudado === 'number' ) {
    moneyBuilder = capitalAdeudado.toString();
  } else {
    moneyBuilder = capitalAdeudado;
  }

  const copTaker = moneyBuilder.replaceAll(
    /\sCOP/gi, ''
  );

  const dotTaker = copTaker.replaceAll(
    '.', ''
  );

  const commaTaker = dotTaker.replaceAll(
    ',', ''
  );
  console.log(
    commaTaker
  );

  return Number(
    commaTaker
  );
}

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

class NewJuzgado implements Juzgado {
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
    {
      capitalAdeudado,
      entregaGarantiasAbogado,
      etapaProcesal,
      departamento,
      fechaPresentacion,
      tipoProceso,
      mandamientoPago,
      municipio,
      obligacion,
      radicado,
      llaveProceso,
      vencimientoPagare,
    }: DemandaRaw, numero: number,
    proceso?: intProceso,
  ) {
    const obligacionesSet = new Set<string | number>();

    if ( obligacion ) {
      const {
        A, B
      } = obligacion;

      if ( A ) {
        obligacionesSet.add(
          A
        );
      }

      if ( B ) {
        obligacionesSet.add(
          B
        );
      }
    }

    const dateFechaPresentacion = fechaPresentacion
      ? new Date(
        fechaPresentacion
      )
      : null;

    if ( !dateFechaPresentacion ) {
      this.fechaPresentacion = null;
    } else {
      const isValidDate = dateFechaPresentacion.toString() !== 'Invalid Date';

      if ( !isValidDate ) {
        this.fechaPresentacion = null;
      } else {
        this.fechaPresentacion = dateFechaPresentacion;
      }
    }

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

    this.llaveProceso = llaveProceso
      ? llaveProceso
      : null;

    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
        ? capitalAdeudado
        : 0,
    );

    this.tipoProceso = tipoProcesoBuilder(
      tipoProceso
    );
    this.etapaProcesal = etapaProcesal
      ? `${ etapaProcesal }`
      : null;
    this.municipio = municipio
      ? municipio
      : null;
    this.obligacion = Array.from(
      obligacionesSet
    );
    this.radicado = radicado
      ? `${ radicado }`
      : null;
    this.vencimientoPagare = vencimientoPagareFixer(
      vencimientoPagare
    );
    this.departamento = departamento
      ? departamento
      : null;
    this.juzgado = proceso
      ? new NewJuzgado(
        proceso
      )
      : null;
    this.idProceso = proceso
      ? proceso.idProceso
      : numero;
    this.idConexion = proceso
      ? proceso.idConexion
      : null;
    this.fechaProceso = proceso
      ? proceso.fechaProceso
        ? new Date(
          proceso.fechaProceso
        )
        : null
      : null;
    this.fechaUltimaActuacion = proceso
      ? proceso.fechaUltimaActuacion
        ? new Date(
          proceso.fechaUltimaActuacion
        )
        : null
      : null;
    this.sujetosProcesales = proceso
      ? proceso.sujetosProcesales
      : null;
    this.esPrivado = proceso
      ? proceso.esPrivado
      : null;
    this.cantFilas = proceso
      ? proceso.cantFilas
      : null;

    this.notificacion = null;
    this.medidasCautelares = null;


  }
  juzgado: Juzgado | null;
  idProceso: number;
  idConexion: number | null;
  llaveProceso: string | null;
  fechaProceso: Date | null;
  fechaUltimaActuacion: Date | null;
  sujetosProcesales: string | null;
  esPrivado: boolean | null;
  cantFilas: number | null;
  notificacion: intNotificacion | null;
  medidasCautelares: { fechaOrdenaMedida: Date | null; medidaSolicitada: string | null; } | null;
  vencimientoPagare: ( Date | null )[];
  capitalAdeudado: number | null;
  departamento: string | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProceso;
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date | null;
  municipio: string | null;
  obligacion: ( number | string )[];
  radicado: string | null;

}
