import { Juzgado } from '@prisma/client';
import { Despachos } from '../data/despachos';
import { DemandaRaw, IntDemanda, TipoProceso, intNotificacion, } from '../types/carpetas';
import { intProceso } from '../types/procesos';
import { tipoProcesoBuilder } from '../data/tipoProcesos';
import { fechaPresentacionBuilder, fixSingleFecha, } from './idk';
import { ClassNotificacion } from './notificacion';

function vencimientoPagareFixer(
  rawVencimientoPagare?: string | number
) {
  if ( !rawVencimientoPagare ) {
    return [];
  }

  const isNumber = typeof rawVencimientoPagare === 'number';


  if ( isNumber ) {
    return [ new Date(
      rawVencimientoPagare
    ) ];
  }

  const {
    length: rawVencimientoPagareLength
  } = rawVencimientoPagare;

  if ( rawVencimientoPagareLength <= 12 ) {
    const fechaFixed = fixSingleFecha(
      rawVencimientoPagare
    );

    if ( !fechaFixed || fechaFixed.toString() === 'Invalid Date' ) {
      return [];
    }

    return [ fechaFixed ];
  }

  const fechasSet = new Set<Date>();

  const [
    firstFecha,
    secondFecha,
    thirdFecha,
    fourthFecha,
  ] = rawVencimientoPagare.split(
    '//'
  );

  if ( firstFecha && firstFecha.length <= 12 ) {
    console.log(
      firstFecha.length
    );

    //* Es una la primer fecha de presentacion
    const fechaFixed = fixSingleFecha(
      firstFecha
    );

    if ( fechaFixed ) {
      fechasSet.add(
        fechaFixed
      );
    }
  }

  if ( secondFecha && secondFecha.length <= 12 ) {
    console.log(
      secondFecha.length
    );

    //* Es una la primer fecha de presentacion
    const fechaFixed = fixSingleFecha(
      secondFecha
    );

    if ( fechaFixed ) {
      fechasSet.add(
        fechaFixed
      );
    }
  }

  if ( thirdFecha && thirdFecha.length <= 12 ) {
    console.log(
      thirdFecha.length
    );

    //* Es una la primer fecha de presentacion
    const fechaFixed = fixSingleFecha(
      thirdFecha
    );

    if ( fechaFixed ) {
      fechasSet.add(
        fechaFixed
      );
    }
  }


  if ( fourthFecha && fourthFecha.length <= 12 ) {
    console.log(
      fourthFecha.length
    );

    //* Es una la primer fecha de presentacion
    const fechaFixed = fixSingleFecha(
      fourthFecha
    );

    if ( fechaFixed ) {
      fechasSet.add(
        fechaFixed
      );
    }
  }

  return Array.from(
    fechasSet
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
            `procesos despacho is in despachos ${
              indexOfDesp + 1
            }`
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
  obligacion: string[];
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
      notificacion,
      radicado,
      llaveProceso,
      medidasCautelares,
      vencimientoPagare,
    }: DemandaRaw,
  ) {
    const obligacionesSet = new Set<string>();

    if ( obligacion ) {
      const {
        A, B
      } = obligacion;

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
    }

    this.fechaPresentacion = fechaPresentacionBuilder(
      fechaPresentacion
    );
    this.notificacion = notificacion
      ? new ClassNotificacion(
        notificacion
      )
      : null;

    const dateMandamientoPago = mandamientoPago
      ? new Date(
        mandamientoPago
      )
      : null;

    if ( !dateMandamientoPago ) {
      this.mandamientoPago = null;
    } else {
      const isValidDate
        = dateMandamientoPago.toString() !== 'Invalid Date';

      if ( !isValidDate ) {
        this.mandamientoPago = null;
      } else {
        this.mandamientoPago = dateMandamientoPago;
      }
    }

    const dateEntregaGarantiasAbogado
      = entregaGarantiasAbogado
        ? new Date(
          entregaGarantiasAbogado
        )
        : null;

    if ( !dateEntregaGarantiasAbogado ) {
      this.entregaGarantiasAbogado = null;
    } else {
      const isValidDate
        = dateEntregaGarantiasAbogado.toString()
        !== 'Invalid Date';

      if ( !isValidDate ) {
        this.entregaGarantiasAbogado = null;
      } else {
        this.entregaGarantiasAbogado
          = dateEntregaGarantiasAbogado;
      }
    }

    this.expediente = llaveProceso
      ? llaveProceso
      : null;

    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
        ? capitalAdeudado
        : 0
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
    this.despacho = null;
    this.medidasCautelares = medidasCautelares
      ? {
          fechaOrdenaMedida: medidasCautelares.fechaOrdenaMedidas
            ? new Date(
              medidasCautelares.fechaOrdenaMedidas
            )
            : null
          , medidaSolicitada: medidasCautelares.medidaSolicitada
            ? medidasCautelares.medidaSolicitada
            : null
        }
      : null;
    this.llaveProceso = llaveProceso;
  }

  llaveProceso: string | null;
  notificacion: intNotificacion | null;
  medidasCautelares: { fechaOrdenaMedida: Date | null; medidaSolicitada: string | null; } | null;
  capitalAdeudado: number | null;
  carpetaNumero!: number;
  departamento: string | null;
  despacho: string | null;
  entregaGarantiasAbogado: Date | null;
  etapaProcesal: string | null;
  expediente: string | null;
  fechaPresentacion: Date[];
  id!: number;
  mandamientoPago: Date | null;
  municipio: string | null;
  radicado: string | null;
  tipoProceso: TipoProceso;
  vencimientoPagare: Date[];
}
