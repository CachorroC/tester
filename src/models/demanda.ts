import { Despachos } from '../data/despachos';
import { DemandaRaw, IntDemanda, Juzgado, TipoProceso,  } from '../types/carpetas';
import { intProceso } from '../types/procesos';

function vencimientoPagareFixer(
  rawVencimientoPagare?: string | number
): Date[] {
  console.log(
    rawVencimientoPagare
  );

  if ( !rawVencimientoPagare ) {
    return [];
  }

  let stringPagare;

  if ( typeof rawVencimientoPagare === 'number' ) {
    stringPagare = rawVencimientoPagare.toString();
  } else {
    stringPagare = rawVencimientoPagare;
  }

  const pagaresDateSet = new Set<Date>();

  const matcherPagare = stringPagare.split(
    '//'
  );
  console.log(
    `hay ${ matcherPagare?.length } pagarés en este proceso`
  );

  for ( const pagare of matcherPagare ) {
    const newPagareString = pagare
      .trim()
      .replace(
        '/', '-'
      );

    /*
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

 */
    const stringDate = new Date(
      newPagareString
    );

    /*  console.log(
      `la nueva fecha del pagaré arrojó: ${ stringDate.toDateString() }`
    ); */

    if ( !stringDate || stringDate === null ) {
      continue;
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
    /\sCOP/gi,
    ''
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


export class Demanda implements IntDemanda {
  constructor(
    {
      capitalAdeudado,
      entregaGarantiasAbogado,
      etapaProcesal,
      departamento,
      fechaPresentacion,
      mandamientoPago,
      municipio,
      obligacion,
      radicado,
      vencimientoPagare
    }: DemandaRaw,
    llaveProceso?: string,
  ) {
    const juzgadosSet: Juzgado[] = [];

    const obligacionesSet = new Set<
      string | number
    >();

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



    this.expediente = llaveProceso
      ? llaveProceso
      : null;

    this.capitalAdeudado = capitalBuilder(
      capitalAdeudado
        ? capitalAdeudado
        : 0
    );
    this.entregaGarantiasAbogado
      = entregaGarantiasAbogado
        ? new Date(
          entregaGarantiasAbogado
        )
        : null;
    this.etapaProcesal = etapaProcesal
      ? `${ etapaProcesal }`
      : null;
    this.fechaPresentacion = fechaPresentacion
      ? new Date(
        fechaPresentacion
      )
      : null;
    this.juzgados = juzgadosSet;
    this.municipio = municipio
      ? municipio
      : null;
    this.mandamientoPago = mandamientoPago
      ? new Date(
        mandamientoPago
      )
      : null;

    this.obligacion = Array.from(
      obligacionesSet
    );
    this.radicado = radicado
      ? `${ radicado }`
      : null;
    this.vencimientoPagare
      = vencimientoPagareFixer(
        vencimientoPagare
      );
    this.departamento = departamento
      ? departamento
      : null;
  }
  capitalAdeudado: number | null;
  departamento: string | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProceso = 'SINGULAR';
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date | null;
  municipio: string | null;
  obligacion: ( number | string )[];
  radicado: string | null;
  vencimientoPagare: Date[];
  expediente: string | null;
  juzgados: Juzgado[];


}
