
import { PrismaClient, Prisma } from '@prisma/client';
import { Despachos } from '../data/despachos';
import { ConsultaActuacion, intActuacion } from '../types/actuaciones';
import { Juzgado, Category, TipoProceso, IntDeudor, CarpetaRaw, Codeudor, IntCarpeta } from '../types/carpetas';
import { ConsultaNumeroRadicacion, Data, Message, intProceso } from '../types/procesos';
import { Demanda } from './demanda';
import { Deudor } from './deudor';

const prisma = new PrismaClient();

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


export class CarpetaJudicial implements IntCarpeta {
  [ x: string ]: string | number | null | number[] | Demanda | Date | Date[] | undefined | unknown;
  numero: number;
  llaveProceso: string | null;

  idProcesos: number[] | null;
  demanda: {
    despachos?: string[];
    capitalAdeudado: number | null;
  departamento: string | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProceso
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date | null;
  municipio: string | null;
  obligacion: ( number | string )[];
  radicado: string | null;
  vencimientoPagare: Date[];
  expediente: string | null;
  juzgados: NewJuzgado[];
  sujetosProcesales?: string[];
  };
  fecha?: Date;
  ultimaActuacion?: intActuacion;
  category: Category;
  tipoProceso: TipoProceso;
  deudor: IntDeudor;
  codeudor?: Codeudor;
  cc: number;
  procesos?: intProceso[];

  actuaciones?: intActuacion[];
  constructor(
    {
      llaveProceso,
      codeudor,
      category,
      deudor,
      demanda,
      numero
    }: CarpetaRaw,
  ) {
    this.idProcesos = null;
    this.llaveProceso = llaveProceso
      ? llaveProceso
      : null;
    this.numero = numero;
    this.tipoProceso = demanda.tipoProceso
      ? ( demanda.tipoProceso as TipoProceso )
      : 'SINGULAR';
    this.category = category;
    this.deudor = new Deudor(
      deudor
    );
    this.demanda = new Demanda(
      demanda, llaveProceso
    );
    this.codeudor = codeudor;
    this.cc = Number(
      deudor.cedula
    );
  }


  get nombre() {
    const nombres
          = this.deudor.primerNombre
          + ( this.deudor.segundoNombre
            ? ' ' + this.deudor.segundoNombre
            : ' ' );

    const apellidos = this.deudor.segundoApellido
      ? this.deudor.primerApellido + ' ' + this.deudor.segundoApellido
      : this.deudor.primerApellido;

    const rawName = `${ nombres } ${ apellidos }`;

    return rawName;
  }

  hasKey () {
    if ( this.llaveProceso === null ) {
      return false;
    } else if ( typeof this.llaveProceso === 'string' ) {
      return true;
    }

    return false;

  }
  //SECTION createCarpeta
  createCarpeta () {
    const newCarpeta: Prisma.CarpetaCreateInput = {
      numero                 : this.numero,
      nombre                 : this.nombre,
      capitalAdeudado        : this.demanda.capitalAdeudado,
      entregaGarantiasAbogado: this.demanda.entregaGarantiasAbogado,
      tipoProceso            : this.tipoProceso,
      etapaProcesal          : this.demanda.etapaProcesal,
      fechaPresentacion      : this.demanda.fechaPresentacion,
      mandamientoPago        : this.demanda.mandamientoPago,
      llaveProceso           : this.llaveProceso,
      category               : this.category,
      radicado               : this.demanda.radicado,
      vencimientoPagare      : this.demanda.vencimientoPagare,
      obligaciones           : this.demanda.obligacion.map(
        (
          o
        ) => {
          return String(
            o
          );
        }
      ),
      idProcesos: this.idProcesos
        ? this.idProcesos
        : [],
      deudor: JSON.stringify(
        this.deudor
      ),
      demanda: JSON.stringify(
        this.demanda
      ),

    };

    return prisma.carpeta.create(
      {
        data: newCarpeta
      }
    );
  }
  async consultaProcesos () {
    try {
      const idProcesosSet = new Set<number>();

      const sujetosProcesalesSet = new Set<string>();

      const despachosSet= new Set<string>();

      const juzgadosSet = new Set<Juzgado>();

      if ( !this.llaveProceso ) {
        throw new Error(
          'aún no se le ha asignado un número de expediente a esta carpeta.'
        );

      }

      await sleep(
        this.numero
      );

      const request = await  fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`
      );

      if ( !request.ok ) {
        const json = ( await request.json() ) as Data;
        return json;
      }

      const json = ( await request.json() ) as ConsultaNumeroRadicacion;

      const responseReturn: Data = {
        StatusCode: request.status,
        Message   : request.statusText as Message,
        procesos  : json.procesos
      };

      const prismaProcesos = await prisma.proceso.createMany(
        {
          data: json.procesos.map(
            (
              proceso
            ) => {
              return {
                ...proceso,
                fechaProceso: proceso.fechaProceso
                  ?  new Date(
                    proceso.fechaProceso
                  )
                  : null,
                fechaUltimaActuacion: proceso.fechaUltimaActuacion
                  ? new Date(
                    proceso.fechaUltimaActuacion
                  )
                  : null
              };
            }
          )
        }
      );
      console.log(
        prismaProcesos.count
      );

      for ( const proceso of json.procesos ) {


        if ( proceso.esPrivado ) {
          continue;
        }

        idProcesosSet.add(
          proceso.idProceso
        );
        despachosSet.add(
          proceso.despacho
        );
        juzgadosSet.add(
          new NewJuzgado(
            proceso
          )
        );
        sujetosProcesalesSet.add(
          proceso.sujetosProcesales
        );
        this.demanda.departamento = proceso.departamento;
      }

      this.procesos = json.procesos;
      this.idProcesos = Array.from(
        idProcesosSet
      );

      this.demanda.despachos = Array.from(
        despachosSet
      );
      this.demanda.sujetosProcesales = Array.from(
        sujetosProcesalesSet
      );

      this.demanda.juzgados = Array.from(
        juzgadosSet
      );
      return await Promise.resolve(
        responseReturn
      );
    } catch ( error ) {

      if ( error instanceof Error ) {
        console.log(
          `Expediente: ${ this.llaveProceso }: error en la conexion network del fetchProceso ${ error.name } : ${ error.message }`,
        );

        return {
          StatusCode: 404,
          Message   : `${ error.name }: ${ error.message }`
        };
      }

      console.log(
        `Expediente: ${ this.llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ error }`,
      );

      return {
        StatusCode: 404,
        Message   : JSON.stringify(
          error, null, 2
        )
      };
    }
  }

  async consultaActuaciones () {
    try {
      const actuacionesMap = new Map<number, intActuacion>();

      const actuacionesSet = new Set<intActuacion>();

      if ( !this.idProcesos || this.idProcesos.length === 0 ) {
        throw new Error(
          'no hay idProcesos correspondientes para hacer la busqueda de este proceso.'
        );

      }

      /*   await sleep(
        this.numero
      );
 */
      for ( const idProceso of this.idProcesos ) {

        const request = await fetch(
          `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`
        );

        if ( !request.ok ) {
          const json = ( await request.json() ) as Data;
          console.log(
            JSON.stringify(
              json, null, 2
            )
          );
          return json;
        }

        const data = ( await request.json() ) as ConsultaActuacion;

        const {
          actuaciones
        } = data;

        const [
          ultimaActuacion
        ] = actuaciones;

        actuaciones.forEach(
          (
            actuacion
          ) => {
            actuacionesSet.add(
              actuacion
            );
          }
        );

        actuacionesMap.set(
          idProceso, ultimaActuacion
        );


        const incomingDate = new Date(
          ultimaActuacion.fechaActuacion
        )
          .getTime();

        const savedDate = this.fecha
          ?            this.fecha.getTime()
          : null;

        if ( savedDate === incomingDate ) {
          continue;
        } else  if ( !savedDate || savedDate < incomingDate ) {
          this.fecha = new Date(
            ultimaActuacion.fechaActuacion
          );
          this.ultimaActuacion = ultimaActuacion;

        }

      }

      this.actuaciones =  Array.from(
        actuacionesSet
      );

      if ( actuacionesMap.size > 0 ) {

        const responseReturn: Data = {
          StatusCode : 200,
          Message    : 'ok' as Message,
          actuaciones: Array.from(
            actuacionesMap.values()
          )
        };
        return responseReturn;
      }

      throw new Error(
        'actuaciones size is less than 0'
      );


    } catch ( error ) {


      if ( error instanceof Error ) {
        console.log(
          `Expediente: ${ this.llaveProceso }: error en la conexion network del fetchProceso ${ error.name } : ${ error.message }`,
        );

        return {
          StatusCode: 404,
          Message   : `${ error.name }: ${ error.message }`
        };
      }

      console.log(
        `Expediente: ${ this.llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ error }`,
      );

      return {
        StatusCode: 404,
        Message   : JSON.stringify(
          error, null, 2
        )
      };
    }
  }
}

export const sleep = (
  ms: number
) => {
  return new Promise(
    (
      resolve
    ) => {
      const newMs = ms;

      return setTimeout(
        resolve, newMs
      );
    }
  );
};
