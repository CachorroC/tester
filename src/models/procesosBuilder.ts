import { ConsultaNumeroRadicacion, Departamento } from '../types/procesos';
import { client } from './carpeta';
import { NewJuzgado } from './demanda';

export class Judicial {
  /*
   * Observe that the field may now be `undefined`.
   * This encodes the "pending" state at the type-level.
   */

  _llaveProceso: string;
  _procesos:
    | null
    | {
      fechaProceso: Date | null;
      fechaUltimaActuacion: Date | null;
      idProceso: number;
      idConexion: number;
      llaveProceso: string;
      despacho: string;
      departamento: Departamento;
      sujetosProcesales: string;
      esPrivado: boolean;
      cantFilas: number;
      juzgado: {
        id: number;
        tipo: string;
        url: string;
      };
    }[];
  numero: number;
  /*
   * The `constructor` merely constructs the initial state
   * of the state machine. The lifecycle methods below will
   * drive the state transitions forward until the class is
   * fully initialized.
   */
  constructor(
    llaveProceso: string, numero: number 
  ) {
    this.numero = numero;
    this._procesos = null;
    this._llaveProceso = llaveProceso;
  }

  /*
   * Observe that this extra step allows us to drive the
   * state machine forward. In doing so, we overwrite the
   * temporary state.
   *
   * Do note, however, that nothing prevents the caller from
   * violating the lifecycle interface. That is, the caller
   * may invoke `Person#initialize` as many times as they please.
   * For this class, the consequences are trivial, but this is not
   * always true for most cases.
   */
  async getProcesos() {
    try {
      if ( this._llaveProceso === 'SinEspecificar' ) {
        throw new Error(
          'no hay llaveProceso en esta carpeta, aborting' 
        );
      }

      const request = await fetch(
        `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ this._llaveProceso }&SoloActivos=false&pagina=1`,
      );

      if ( !request.ok ) {
        const json = await request.json();

        const message = `Error
        Judicial.getProcesos.fetchError(${ this.numero }) =>
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

      this._procesos = procesos.map(
        (
          proceso 
        ) => {
          return {
            ...proceso,
            fechaProceso: proceso.fechaProceso
              ? new Date(
                proceso.fechaProceso 
              )
              : null,
            fechaUltimaActuacion: proceso.fechaUltimaActuacion
              ? new Date(
                proceso.fechaUltimaActuacion 
              )
              : null,
            juzgado: new NewJuzgado(
              proceso 
            ),
          };
        } 
      );
    } catch ( error ) {
      console.log(
        `${ this.numero } => error en CarpetaBuilder.getProcesos(${ this.numero }) => ${ error }`,
      );
    }
  }

  /*
   * Also note that since the `name` field may be `undefined`
   * at certain points of the program, the type system cannot
   * guarantee its existence. Thus, we must employ some defensive
   * programming techniques and assertions to uphold invariants.
   */
  doSomethingWithName() {
    if ( !this._procesos ) {
      throw new Error(
        'not yet initialized' 
      );
    }
    // ...
  }

  async prismaProcesos() {
    try {
      if ( !this._procesos ) {
        throw new Error(
          'no hay procesos en este Judicial' 
        );
      }

      const procesosMapInserted = new Map();

      for ( const proceso of this._procesos ) {
        const procesoInserter = await client.proceso.upsert(
          {
            where: {
              idProceso: proceso.idProceso,
            },
            create: {
              ...proceso,
              Carpeta: {
                connect: {
                  numero: this.numero,
                },
              },
              juzgado: {
                connectOrCreate: {
                  where: {
                    tipo: proceso.juzgado.tipo,
                  },
                  create: proceso.juzgado,
                },
              },
            },
            update: {
              ...proceso,
              Carpeta: {
                connect: {
                  numero: this.numero,
                },
              },
              juzgado: {
                connectOrCreate: {
                  where: {
                    tipo: proceso.juzgado.tipo,
                  },
                  create: proceso.juzgado,
                },
              },
            },
          } 
        );
        procesosMapInserted.set(
          proceso.idProceso, procesoInserter 
        );
      }

      return Object.fromEntries(
        procesosMapInserted 
      );
    } catch ( error ) {
      console.log(
        `Error => Judicial.PrismaProcesos(${ this.numero }) => ${ error }`,
      );
      return null;
    }
  }

  /*
   * Note that the getter may return `undefined` with respect
   * to pending initialization. Alternatively, we may `throw`
   * an exception when the `Person` is not yet initialized,
   * but this is a heavy-handed approach.
   */
  get procesos() {
    return this._procesos;
  }
}
