import * as fs from 'fs/promises';
import Carpetas from '../data/carpetas';
import { tipoProcesoBuilder } from '../data/tipoProcesos';
import { outActuacion, ConsultaActuacion } from '../types/actuaciones';
import {  TipoProcesoRaw, CarpetaRaw, Codeudor, Category } from '../types/carpetas';
import { outProceso, ConsultaNumeroRadicacion } from '../types/procesos';
import { ClassDemanda, NewJuzgado } from './demanda';
import { ClassDeudor } from './deudor';
import { client } from './carpeta';

export class NewJudicial {
  category: Category;
  codeudor: Codeudor | null;
  demanda: ClassDemanda;
  deudor: ClassDeudor;
  fecha: Date | null;
  idProcesos: number[];
  idRegUltimaAct: number | null;
  llaveProceso: string;
  numero: number;
  revisado: boolean;
  terminado: boolean;
  tipoProceso: TipoProcesoRaw;
  ultimaActuacion: outActuacion | null;
  updatedAt: Date;
  nombre: string;
  actuaciones: outActuacion[];
  procesos: outProceso[];
  constructor (
    {
      numero, deudor: rawDeudor, demanda: rawDemanda, category, codeudor
    }: CarpetaRaw
  ) {
    this.actuaciones = [];
    this.procesos = [];
    this.idProcesos = [];
    this.numero = numero;
    this.category = category;
    this.deudor = new ClassDeudor(
      rawDeudor
    );

    this.llaveProceso = rawDemanda.llaveProceso;
    this.demanda = new ClassDemanda(
      rawDemanda
    );
    this.nombre = rawDeudor.nombre;
    this.revisado = category === 'Terminados'
      ? true
      : false;
    this.codeudor = codeudor
      ?{
          nombre: codeudor.nombre
            ? String(
              codeudor.nombre
            )
            : null
          , cedula: codeudor.cedula
            ? String(
              codeudor.cedula
            )
            : null
          , direccion: codeudor.direccion
            ? String(
              codeudor.direccion
            )
            : null
          , telefono: codeudor.telefono
            ? String(
              codeudor.telefono
            )
            : null
          , id           : this.numero
          , carpetaNumero: this.numero
        }
      : null;
    this.tipoProceso = rawDemanda.tipoProceso
      ? tipoProcesoBuilder(
        rawDemanda.tipoProceso
      )
      : 'SINGULAR';

    this.terminado = category === 'Terminados'
      ? true
      : false;
    this.ultimaActuacion = null;
    this.fecha = null;
    this.updatedAt = new Date();
    this.idRegUltimaAct = null;
  }
  async getProcesos () {

    try {
      if ( this.llaveProceso === 'SinEspecificar' ) {
        throw new Error(
          'no hay llaveProceso en esta carpeta, aborting'
        );
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this.llaveProceso }&SoloActivos=false&pagina=1`
      );

      if ( !request.ok ) {
        const json = await request.json();

        const message = `Error
        Judicial.getProcesos.fetchError(${
  this.numero
}) =>
  ${ JSON.stringify(
    json, null, 2
  ) }
  ${ json }
  ${ request.status }
  ${ request.statusText }
  `;
        throw new Error(
          message
        );
      }

      const consultaProcesos
        = ( await request.json() ) as ConsultaNumeroRadicacion;

      const {
        procesos
      } = consultaProcesos;

      for ( const proceso of procesos ) {
        this.idProcesos.push(
          proceso.idProceso
        );
        this.procesos.push(
          {
            ...proceso
            , fechaProceso: proceso.fechaProceso
              ? new Date(
                proceso.fechaProceso
              )
              : null
            , fechaUltimaActuacion: proceso.fechaUltimaActuacion
              ? new Date(
                proceso.fechaUltimaActuacion
              )
              : null
            , juzgado: new NewJuzgado(
              proceso
            )
          }
        );

      }


    } catch ( error ) {
      console.log(
        `${ this.numero } => error en CarpetaBuilder.getProcesos(${ this.numero }) => ${ error }`
      );

    }
  }
  async getActuaciones () {
    for ( const idProceso of this.idProcesos ) {
      try {
        const request = await fetch(
          `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
        );

        if ( !request.ok ) {
          const json = await request.json();
          throw new Error(
            JSON.stringify(
              json
            )
          );
        }

        const consultaActuaciones
            = ( await request.json() ) as ConsultaActuacion;

        const {
          actuaciones
        } = consultaActuaciones;

        const [ ultimaActuacion ] = actuaciones;

        const incomingDate = new Date(
          ultimaActuacion.fechaActuacion
        );

        const incomingYear = incomingDate.getFullYear();

        const incomingMonth = incomingDate.getMonth();

        const incomingDay = incomingDate.getDate();
        console.log(
          `${ this.numero } => la nueva fecha de la actuacion es: ${ new Date(
            incomingYear,
            incomingMonth,
            incomingDay,
          ) } y el timezone offset es  ${ incomingDate.getTimezoneOffset() }
          raw: ${ ultimaActuacion.fechaActuacion }`,
        );



        const savedYear = this.fecha
          ? this.fecha.getFullYear()
          : 2015;

        const savedMonth = this.fecha
          ?this.fecha.getMonth()
          : 0;

        const savedDay = this.fecha
          ? this.fecha.getDate()
          : 1;
        console.log(
          `${ this.numero
          } => la fecha guardada en el servidor de LINK -  actuacion es: ${ new Date(
            savedYear ?? 0,
            savedMonth ?? 0,
            savedDay,
          ) }`,
        );

        if (
          !this.fecha
          || this.fecha < incomingDate
          || this.fecha.toString() === 'Invalid Date'
        ) {
          this.fecha = new Date(
            ultimaActuacion.fechaActuacion
          );
          this.ultimaActuacion = {
            ...ultimaActuacion
            , idProceso     : idProceso
            , fechaActuacion: new Date(
              ultimaActuacion.fechaActuacion
            )
            , fechaRegistro: new Date(
              ultimaActuacion.fechaRegistro
            )
            , fechaFinal: ultimaActuacion.fechaFinal
              ? new Date(
                ultimaActuacion.fechaFinal
              )
              : null
            , fechaInicial: ultimaActuacion.fechaInicial
              ? new Date(
                ultimaActuacion.fechaInicial
              )
              : null
            , isUltimaAct: ultimaActuacion.cant === ultimaActuacion.consActuacion
              ? true
              : false
          };
          this.idRegUltimaAct = ultimaActuacion.idRegActuacion;
        }

        for ( const actuacion of actuaciones ) {
          const newActuacion
            = {
              ...actuacion
              , idProceso: idProceso
              , isUltimaAct:
                    actuacion.cant === actuacion.consActuacion
                      ? true
                      : false
              , createdAt     : new Date
              , fechaActuacion: new Date(
                actuacion.fechaActuacion
              )
              , fechaRegistro: new Date(
                actuacion.fechaRegistro
              )
              , fechaInicial: actuacion.fechaInicial
                ? new Date(
                  actuacion.fechaInicial
                )
                : null
              , fechaFinal: actuacion.fechaFinal
                ? new Date(
                  actuacion.fechaFinal
                )
                : null,
            };

          this.actuaciones.push(
            newActuacion
          );

          try {
            await client.actuacion.upsert(
              {
                where: {
                  idRegActuacion: newActuacion.idRegActuacion
                }
                , create: {
                  ...newActuacion
                  , carpetaNumero: this.numero
                }
                , update: {
                  ...newActuacion
                  , carpetaNumero: this.numero
                }
              }
            );
          } catch ( e ) {
            console.log(
              `error al insertar las actuaciones en prisma ${ e }`
            );
          }
        }


      } catch ( error ) {
        console.log(
          error, null, 2
        );
        continue;
      }
    }
  }
  async prismaUpdater () {
    try {
      const upserter = await client.carpeta.upsert(
        {
          where: {
            numero: this.numero
          }
          , create: {
            llaveProceso  : this.llaveProceso
            , idProcesos    : this.idProcesos
            , nombre        : this.nombre
            , numero        : this.numero
            , category      : this.category
            , idRegUltimaAct: this.idRegUltimaAct
            , fecha         : this.fecha
            , procesos      : {
              connectOrCreate: this.procesos.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso
                    }
                    , create: {
                      ...proceso
                      , juzgado: {
                        connectOrCreate: {
                          where: {
                            tipo: proceso.juzgado.tipo
                          }
                          , create: proceso.juzgado
                        }
                      }
                    }
                  };
                }
              )
            }
          }
          , update:
          {
            llaveProceso: this.llaveProceso
            , idProcesos  : this.idProcesos
            , nombre      : this.nombre
            , numero      : this.numero
            , category    : this.category

            , idRegUltimaAct: this.idRegUltimaAct
            , fecha         : this.fecha
            , procesos      : {
              connectOrCreate: this.procesos.map(
                (
                  proceso
                ) => {
                  return {
                    where: {
                      idProceso: proceso.idProceso
                    }
                    , create: {
                      ...proceso
                      , juzgado: {
                        connectOrCreate: {
                          where: {
                            tipo: proceso.juzgado.tipo
                          }
                          , create: proceso.juzgado
                        }
                      }
                    }
                  };
                }
              )
            }

          }
        }
      );
      return upserter;
    } catch ( error ) {
      console.log(
        error
      );
      return null;
    }
  }

}

async function getProcesosIdk() {
  const newCarpetas = [];

  for ( const carpeta of Carpetas ) {
    const newCarpeta = new NewJudicial(
      carpeta
    );

    await newCarpeta.getProcesos();


    await newCarpeta.getActuaciones();

    await newCarpeta.prismaUpdater();



    newCarpetas.push(
      newCarpeta
    );
    fs.writeFile(
      `carpetas/${ newCarpeta.numero }/newNewNewCarpetas.json`, JSON.stringify(
        newCarpeta, null, 2
      )
    );
  }

  /*
  try {
    const collection = await connectToDatabase();

    const upsertOne = await collection.insertMany(
      newCarpetas, {
        ordered        : true
        , ignoreUndefined: true
      }
    );
    console.log(
      `upsert one to mongo: ${ JSON.stringify(
        upsertOne, null, 2
      ) } `
    );

  } catch ( error ) {
    console.log(
      error
    );
  }
 */
  fs.writeFile(
    'newNewNewCarpetas.json', JSON.stringify(
      newCarpetas, null, 2
    )
  );
}

getProcesosIdk()
  .then(
    (
      rr
    ) => {
      console.log(
        rr
      );
      return rr;
    }
  );