import { PrismaClient, Prisma } from '@prisma/client';
import { Despachos } from '../data/despachos';
import { ConsultaActuacion, intActuacion } from '../types/actuaciones';
import { Juzgado,
  Category,
  TipoProceso,
  IntDeudor,
  CarpetaRaw,
  Codeudor,
  IntCarpeta,
  IntDemanda, } from '../types/carpetas';
import { ConsultaNumeroRadicacion,
  Data,
  Message,
  intProceso, } from '../types/procesos';
import { ClassDemanda } from './demanda';
import { ClassDeudor } from './deudor';
import { connectToDatabase } from '../services/database.service';

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
    ( this.tipo = proceso.despacho ),
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

  numero: number;
  llaveProceso: string | null;

  idProcesos: number[] | null;
  demanda: IntDemanda;
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
      numero,
    }: CarpetaRaw
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
    this.deudor = new ClassDeudor(
      deudor
    );
    this.demanda = new ClassDemanda(
      demanda, llaveProceso
    );
    this.codeudor = codeudor;
    this.cc = Number(
      deudor.cedula
    );
  }

  get nombre() {

    return `${ this.deudor.primerNombre } ${ this.deudor.segundoNombre } ${ this.deudor.primerApellido } ${ this.deudor.segundoApellido }`;
  }
  set nombre (
    nom
  ) {
    [
      this.deudor.primerNombre,
      this.deudor.segundoNombre,
      this.deudor.primerApellido,
      this.deudor.segundoApellido
    ] = nom.split(
      ' '
    );
  }

  //SECTION createCarpeta
  async createCarpeta() {
    try {
      const newCarpeta: Prisma.CarpetaCreateInput = {
        numero      : this.numero,
        nombre      : this.nombre,
        llaveProceso: this.llaveProceso,
        category    : this.category,
        idProcesos  : this.idProcesos
          ? this.idProcesos
          : [],
      };

      const creatorCarpeta = await prisma.carpeta.create(
        {
          data: newCarpeta,
        }
      );
      console.log(
        creatorCarpeta
      );

      return;
    } catch ( error ) {
      if ( error instanceof Prisma.PrismaClientValidationError ) {
        console.log(
          `${ this.numero } =-=> error en la validacion de createCarpeta(): ${ JSON.stringify(
            error,
            null,
            2,
          ) }`,
        );
        return;

      }

      console.log(
        `${ this.numero } =-=> error en async createCarpeta inside the class CarpetaJudicial: ${ JSON.stringify(
          error,
          null,
          2,
        ) }`,
      );
      return;
    }
  }
  async consultaProcesos() {
    try {
      const idProcesosSet = new Set<number>();

      const sujetosProcesalesSet = new Set<string>();

      const despachosSet = new Set<string>();

      const juzgadosSet = new Set<Juzgado>();

      if ( !this.llaveProceso ) {
        throw new Error(
          'aún no se le ha asignado un número de expediente a esta this.',
        );
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`,
      );

      if ( !request.ok ) {
        const json = ( await request.json() ) as Data;
        return json;
      }

      const json = ( await request.json() ) as ConsultaNumeroRadicacion;

      const responseReturn: Data = {
        StatusCode: request.status,
        Message   : request.statusText as Message,
        procesos  : json.procesos,
      };

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

      for ( const prismaJuzgado of this.demanda.juzgados ) {
        try {
          const insertJuzgado = await prisma.juzgado.create(
            {
              data: prismaJuzgado,
            }
          );
          console.log(
            insertJuzgado
          );
          continue;
        } catch ( er ) {
          console.log(
            `error al ingresar el juzgado ${
              prismaJuzgado.url
            } =-=> ${ JSON.stringify(
              er, null, 2
            ) }`,
          );
          continue;
        }
      }

      const prismacarpeta = await prisma.carpeta.update(
        {
          where: {
            numero: this.numero,
          },
          data: {
            idProcesos: json.procesos.map(
              (
                prc
              ) => {
                return prc.idProceso;
              }
            ),
          },
        }
      );
      console.log(
        prismacarpeta
      );

      for ( const prc of json.procesos ) {
        try {
          const prismaProceso = await prisma.proceso.upsert(
            {
              where: {
                idProceso: prc.idProceso,
              },
              create: {
                ...prc,

                fechaProceso: prc.fechaProceso
                  ? String(
                    prc.fechaProceso
                  )
                  : null,
                fechaUltimaActuacion: prc.fechaUltimaActuacion
                  ? String(
                    prc.fechaUltimaActuacion
                  )
                  : null,
              },
              update: {
                ...prc,
                fechaProceso: prc.fechaProceso
                  ? String(
                    prc.fechaProceso
                  )
                  : null,
                fechaUltimaActuacion: prc.fechaUltimaActuacion
                  ? String(
                    prc.fechaUltimaActuacion
                  )
                  : null,

              },
            }
          );
          console.log(
            prismaProceso
          );
          continue;
        } catch ( e ) {
          console.log(
            `error al ingresar el proceso ${
              prc.idProceso
            } =-=> ${ JSON.stringify(
              e, null, 2
            ) }`,
          );
          continue;
        }
      }

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
          Message   : `${ error.name }: ${ error.message }`,
        };
      }

      console.log(
        `Expediente: ${ this.llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ error }`,
      );

      return {
        StatusCode: 404,
        Message   : JSON.stringify(
          error, null, 2
        ),
      };
    }
  }

  async consultaActuaciones() {
    try {
      const actuacionesMap = new Map<number, intActuacion>();

      const actuacionesSet = new Set<intActuacion>();

      if ( !this.idProcesos || this.idProcesos.length === 0 ) {
        throw new Error(
          'no hay idProcesos correspondientes para hacer la busqueda de este proceso.',
        );
      }

      for ( const idProceso of this.idProcesos ) {
        const request = await fetch(
          `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
        );

        if ( !request.ok ) {
          const json = ( await request.json() ) as Data;
          console.log(
            `error en fetch consultaActuaciones ${ idProceso } =-=> ${ JSON.stringify(
              json,
              null,
              2,
            ) }`,
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
          ? this.fecha.getTime()
          : null;

        if ( !savedDate || savedDate < incomingDate ) {
          this.fecha = new Date(
            ultimaActuacion.fechaActuacion
          );
          this.ultimaActuacion = ultimaActuacion;
        }
      }

      this.actuaciones = Array.from(
        actuacionesSet
      );

      for ( const act of Array.from(
        actuacionesSet
      ) ) {
        try {
          const prismaProceso = await prisma.actuacion.upsert(
            {
              where: {
                idRegActuacion: act.idRegActuacion,
              },
              create: {
                ...act,
                carpetaId     : this.numero,
                fechaActuacion: new Date(
                  act.fechaActuacion
                ),
                fechaRegistro: new Date(
                  act.fechaRegistro
                ),
                fechaFinal: act.fechaFinal
                  ? new Date(
                    act.fechaFinal
                  )
                  : null,
                fechaInicial: act.fechaInicial
                  ? new Date(
                    act.fechaInicial
                  )
                  : null,
              },
              update: {
                ...act,
                carpetaId     : this.numero,
                fechaActuacion: new Date(
                  act.fechaActuacion
                ),
                fechaRegistro: new Date(
                  act.fechaRegistro
                ),
                fechaFinal: act.fechaFinal
                  ? new Date(
                    act.fechaFinal
                  )
                  : null,
                fechaInicial: act.fechaInicial
                  ? new Date(
                    act.fechaInicial
                  )
                  : null,
              },
            }
          );
          console.log(
            prismaProceso
          );
          continue;
        } catch ( e ) {
          console.log(
            `error al ingresar la actuacion ${
              act.idRegActuacion
            } =-=> ${ JSON.stringify(
              e, null, 2
            ) }`,
          );
          continue;
        }
      }

      if ( actuacionesMap.size > 0 ) {
        const responseReturn: Data = {
          StatusCode : 200,
          Message    : 'ok' as Message,
          actuaciones: Array.from(
            actuacionesMap.values()
          ),
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
          Message   : `${ error.name }: ${ error.message }`,
        };
      }

      console.log(
        `Expediente: ${ this.llaveProceso }: : error en la conexion network del fetchProceso  =>  ${ error }`,
      );

      return {
        StatusCode: 404,
        Message   : JSON.stringify(
          error, null, 2
        ),
      };
    }
  }
    [x: string]:
    | string
    | number
    | null
    | number[]
    | ClassDemanda
    | Date
    | Date[]
    | undefined
    | unknown;
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
