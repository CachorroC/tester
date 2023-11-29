import { Juzgado,  PrismaClient } from '@prisma/client';
import { Despachos } from '../data/despachos';
import { ConsultaActuacion, intActuacion } from '../types/actuaciones';
import
{ Category,
  TipoProceso,
  IntDeudor,
  CarpetaRaw,
  Codeudor,
  IntCarpeta,
  IntDemanda, } from '../types/carpetas';
import
{ ConsultaNumeroRadicacion,
  Data,
  Message,
  intProceso, } from '../types/procesos';
import { ClassDemanda } from './demanda';
import { ClassDeudor } from './deudor';
import { PrismaDemanda, PrismaDeudor } from './prisma-carpeta';

const client = new PrismaClient();

export class NewJuzgado implements Juzgado {
  constructor (
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
  demanda: IntDemanda;
  fecha?: Date;
  ultimaActuacion?: intActuacion;
  category: Category;
  tipoProceso: TipoProceso;
  deudor: IntDeudor;
  codeudor?: Codeudor;
  readonly cc: number;
  procesos?: intProceso[];

  // SECTION constructor
  constructor (
    {
      llaveProceso,
      codeudor,
      category,
      deudor,
      demanda,
      numero,
    }: CarpetaRaw
  ) {
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
      demanda, llaveProceso, this.procesos
    );
    this.codeudor = codeudor;
    this.cc = Number(
      deudor.cedula
    );
    this.idProcesos = null;
  }
  idProcesos: number[] | null;
  //!SECTION

  get nombre () {
    return `${ this.deudor.primerNombre } ${ this.deudor.segundoNombre } ${ this.deudor.primerApellido } ${ this.deudor.segundoApellido }`;
  }
  set nombre (
    nom
  ) {
    [
      this.deudor.primerNombre,
      this.deudor.segundoNombre,
      this.deudor.primerApellido,
      this.deudor.segundoApellido,
    ] = nom.split(
      ' '
    );
  }
  async prismaCarpeta () {

    try {

      return await client.carpeta.upsert(
        {
          where: {
            numero: this.numero
          },
          create: {
            nombre  : this.nombre,
            category: this.category,
            numero  : this.numero,
            demanda : {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero
                },
                create: new PrismaDemanda(
                  this
                )
              }
            },
            deudor: {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero
                },
                create: new PrismaDeudor(
                  this
                )
              }
            },
            terminado: ( this.category === 'Terminados' )
              ? true
              : false,
            tipoProceso: this.tipoProceso,
            revisado   : false
          },
          update: {
            nombre  : this.nombre,
            category: this.category,
            numero  : this.numero,
            demanda : {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero
                },
                create: new PrismaDemanda(
                  this
                )
              }
            },
            deudor: {
              connectOrCreate: {
                where: {
                  carpetaNumero: this.numero
                },
                create: new PrismaDeudor(
                  this
                )
              }
            },
            terminado: ( this.category === 'Terminados' )
              ? true
              : false,
            tipoProceso : this.tipoProceso,
            llaveProceso: this.llaveProceso
              ? this.llaveProceso
              : null
          }
        }
      );
    } catch ( error ) {
      console.log(
        `CarpetaJudicial.prismaCarpeta(${ this.numero }) Error => ${ error }`
      );
      return null;
    }
  }
  //SECTION consultaProcesos
  async consultaProcesos () {
    const idProcesosSet = new Set<number>();

    const sujetosProcesalesSet = new Set<string>();

    const despachosSet = new Set<string>();

    const juzgadosSet = new Set<Juzgado>();

    try {
      if ( !this.llaveProceso ) {
        throw new Error(
          'aún no se le ha asignado un número de expediente a esta this.llaveProceso',
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

        try {
          await client.proceso.upsert(
            {
              where: {
                idProceso: proceso.idProceso
              },
              create: {
                llaveProceso     : proceso.llaveProceso,
                idProceso        : proceso.idProceso,
                idConexion       : proceso.idConexion,
                despacho         : proceso.despacho,
                departamento     : proceso.departamento,
                sujetosProcesales: proceso.sujetosProcesales,
                esPrivado        : proceso.esPrivado,
                cantFilas        : proceso.cantFilas,
                fechaProceso     : proceso.fechaProceso
                  ? new Date(
                    proceso.fechaProceso
                  )
                  : null,
                fechaUltimaActuacion: proceso.fechaUltimaActuacion
                  ? new Date(
                    proceso.fechaUltimaActuacion
                  )
                  : null,
                Juzgado: {
                  connectOrCreate: {
                    where: {
                      tipo: proceso.despacho
                    },
                    create: new NewJuzgado(
                      proceso
                    )
                  }
                },


              },
              update: {
                llaveProceso     : proceso.llaveProceso,
                idProceso        : proceso.idProceso,
                idConexion       : proceso.idConexion,
                despacho         : proceso.despacho,
                departamento     : proceso.departamento,
                sujetosProcesales: proceso.sujetosProcesales,
                esPrivado        : proceso.esPrivado,
                cantFilas        : proceso.cantFilas,
                fechaProceso     : proceso.fechaProceso
                  ? new Date(
                    proceso.fechaProceso
                  )
                  : null,
                fechaUltimaActuacion: proceso.fechaUltimaActuacion
                  ? new Date(
                    proceso.fechaUltimaActuacion
                  )
                  : null,
                Juzgado: {
                  connectOrCreate: {
                    where: {
                      tipo: proceso.despacho
                    },
                    create: new NewJuzgado(
                      proceso
                    )
                  }
                },


              }
            }
          );
        } catch ( error ) {
          console.log(
            error
          );
        }
      }

      const activeProcesos: intProceso[] = [];
      json.procesos.forEach(
        (
          proceso
        ) => {
          if ( !proceso.esPrivado ) {
            activeProcesos.push(
              proceso
            );
          }
        }
      );
      this.procesos = activeProcesos;
      this.idProcesos = activeProcesos.map(
        (
          prc
        ) => {
          return prc.idProceso;
        }
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

      return responseReturn;
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
  //!SECTION
  // SECTION consultaActuaciones
  async consultaActuaciones () {
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
              {
                ...actuacion,
                idProceso: idProceso
              }
            );
          }
        );

        actuacionesMap.set(
          idProceso, {
            ...ultimaActuacion,
            idProceso: idProceso
          }
        );

        const incomingDate = new Date(
          ultimaActuacion.fechaActuacion
        );


        const incomingYear = incomingDate.getFullYear();

        const incomingMonth = incomingDate.getMonth();

        const incomingDay = incomingDate.getDate();
        console.log(
          `${ this.numero } => la nueva fecha de la actuacion es: ${ new Date(
            incomingYear, incomingMonth, incomingDay
          ) } y el timezone offset es  ${ incomingDate.getTimezoneOffset() }
          raw: ${ ultimaActuacion.fechaActuacion }`
        );

        const savedDate = this.fecha
          ? this.fecha
          : null;

        const savedYear = savedDate?.getFullYear();

        const savedMonth = savedDate?.getMonth();

        const savedDay = savedDate?.getDate();
        console.log(
          `${ this.numero } => la fecha guardada en el servidor de LINK -  actuacion es: ${ new Date(
            savedYear ?? 0, savedMonth ?? 0, savedDay
          ) }`
        );

        if ( !savedDate || savedDate < incomingDate || savedDate.toString() === 'Invalid Date' ) {
          this.fecha = new Date(
            ultimaActuacion.fechaActuacion
          );
          this.ultimaActuacion = {
            ...ultimaActuacion,
            idProceso: idProceso
          };
        }
      }

      if ( actuacionesMap.size > 0 ) {
        return {
          StatusCode : 200,
          Message    : 'ok' as Message,
          actuaciones: Array.from(
            actuacionesMap.values()
          ),
        };
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
