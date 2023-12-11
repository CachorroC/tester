// To parse this data:
//
//   import { Convert, CarpetaJudicial } from "./file";
//
//   const carpetaJudicial = Convert.toCarpetaJudicial(json);

export interface CarpetaJudicial {
  actuacion?: Actuacion;
  carpeta?: Carpeta;
  codeudor?: Codeudor;
  demanda?: Demanda;
  deudor?: Deudor;
  juzgado?: Juzgado;
  medidasCautelares?: MedidasCautelares;
  nota?: Nota;
  notificacion?: Notificacion;
  notifier?: Notifier;
  proceso?: Proceso;
  subTarea?: SubTarea;
  tarea?: Tarea;
}

export type intSubTarea = Required<SubTarea>;

export interface SubTarea {
  date?: null | string;
  id?: number;
  isComplete?: boolean;
  Tarea?: null | Tarea;
  text: string;
}

export type intTarea = Required<Tarea>;

export interface Tarea {
  Carpeta?: null | Carpeta;
  complete?: boolean;
  content?: null | string;
  createdAt?: Date;
  dueDate?: null | string;
  id?: number;
  subTareas?: SubTarea[];
  title: string;
  updatedAt: Date;
}

export type intJuzgado = Required<Juzgado>;

export interface Juzgado {
  id: number;
  procesos?: Proceso[];
  tipo: string;
  url: string;
}

export interface Proceso {
  actuaciones?: Actuacion[];
  cantFilas: number;
  carpetaOfProceso?: Carpeta;
  departamento: string;
  despacho: string;
  esPrivado: boolean;
  fechaProceso?: null | string;
  fechaUltimaActuacion?: null | string;
  idConexion: number;
  idProceso: number;
  juzgado?: Juzgado;
  llaveProceso: string;
  sujetosProcesales: string;
  carpetaNumero: number;
  juzgadoTipo: string;
}

export interface Notifier {
  fechaAporta?: null | string;
  fechaRecibido?: null | string;
  id?: number;
  Notificacion?: null | Notificacion;
  resultado?: boolean | null;
  tipo: string;
}

export interface Notificacion {
  autoNotificado?: null | string;
  carpeta?: Carpeta;
  certimail?: boolean | null;
  fisico?: boolean | null;
  id?: number;
  notifiers?: Notifier[];
  carpetaNumero: number;
}

export interface Nota {
  carpeta?: null | Carpeta;
  content?: null | string;
  createdAt?: Date;
  date: Date;
  id?: number;
  pathname?: null | string;
  title: string;
  updatedAt: Date;
}

export interface Deudor {
  carpeta?: Carpeta;
  cedula: string;
  direccion?: null | string;
  email?: null | string;
  id?: number;
  primerApellido: string;
  primerNombre: string;
  segundoApellido?: null | string;
  segundoNombre?: null | string;
  telCelular?: null | string;
  telFijo?: null | string;
  carpetaNumero: number;
}

export interface MedidasCautelares {
  Demanda?: Demanda[];
  fechaOrdenaMedida?: null | string;
  id?: number;
  medidaSolicitada?: null | string;
}

export interface Demanda {
  capitalAdeudado?: number | null;
  carpeta?: Carpeta;
  departamento?: null | string;
  despacho?: null | string;
  entregaGarantiasAbogado?: null | string;
  etapaProcesal?: null | string;
  expediente?: null | string;
  fechaPresentacion: string[];
  id?: number;
  mandamientoPago?: null | string;
  medidasCautelares?: null | MedidasCautelares;
  municipio?: null | string;
  obligacion: string[];
  radicado?: null | string;
  tipoProceso?: TipoProceso;
  vencimientoPagare: string[];
  carpetaNumero: number;
}

export interface Codeudor {
  Carpeta?: Carpeta;
  cedula?: null | string;
  direccion?: null | string;
  id: number;
  nombre?: null | string;
  telefono?: null | string;
  carpetaNumero: number;
}

export type intCarpeta = Required<Carpeta>;

export interface Carpeta {
  category?: Category;
  codeudor?: null | Codeudor;
  demanda?: null | Demanda;
  deudor?: null | Deudor;
  fecha?: null | string;
  idProcesos: number[];
  llaveProceso: string;
  nombre: string;
  notas?: Nota[];
  notificacion?: null | Notificacion;
  numero: number;
  procesos?: Proceso[];
  revisado?: boolean;
  tareas?: Tarea[];
  terminado?: boolean;
  ultimaActuacion?: null | Actuacion;
  updatedAt: Date;
}

export interface Actuacion {
  actuacion: string;
  anotacion?: null | string;
  cant: number;
  Carpeta?: Carpeta[];
  carpetaNumero?: number | null;
  codRegla: string;
  conDocumentos: boolean;
  consActuacion: number;
  createdAt?: Date;
  fechaActuacion: Date;
  fechaFinal?: null | string;
  fechaInicial?: null | string;
  fechaRegistro: Date;
  idRegActuacion: number;
  isUltimaAct: boolean;
  llaveProceso: string;
  perteneceA?: Proceso;
  idProceso: number;
}

export type TipoProceso =
  | 'HIPOTECARIO'
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'ACUMULADO';

export type Category =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia'
  | 'SinEspecificar'
  | 'todos';

// Converts JSON strings to/from your types
export class Convert {
  public static toCarpetaJudicial(
    json: string
  ): CarpetaJudicial {
    return JSON.parse(
      json 
    );
  }

  public static carpetaJudicialToJson(
    value: CarpetaJudicial
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toSubTarea(
    json: string 
  ): SubTarea {
    return JSON.parse(
      json 
    );
  }

  public static subTareaToJson(
    value: SubTarea 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toTarea(
    json: string 
  ): Tarea {
    return JSON.parse(
      json 
    );
  }

  public static tareaToJson(
    value: Tarea 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toJuzgado(
    json: string 
  ): Juzgado {
    return JSON.parse(
      json 
    );
  }

  public static juzgadoToJson(
    value: Juzgado 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toProceso(
    json: string 
  ): Proceso {
    return JSON.parse(
      json 
    );
  }

  public static procesoToJson(
    value: Proceso 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toNotifier(
    json: string 
  ): Notifier {
    return JSON.parse(
      json 
    );
  }

  public static notifierToJson(
    value: Notifier 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toNotificacion(
    json: string 
  ): Notificacion {
    return JSON.parse(
      json 
    );
  }

  public static notificacionToJson(
    value: Notificacion
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toNota(
    json: string 
  ): Nota {
    return JSON.parse(
      json 
    );
  }

  public static notaToJson(
    value: Nota 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDeudor(
    json: string 
  ): Deudor {
    return JSON.parse(
      json 
    );
  }

  public static deudorToJson(
    value: Deudor 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toMedidasCautelares(
    json: string
  ): MedidasCautelares {
    return JSON.parse(
      json 
    );
  }

  public static medidasCautelaresToJson(
    value: MedidasCautelares
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toDemanda(
    json: string 
  ): Demanda {
    return JSON.parse(
      json 
    );
  }

  public static demandaToJson(
    value: Demanda 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toCodeudor(
    json: string 
  ): Codeudor {
    return JSON.parse(
      json 
    );
  }

  public static codeudorToJson(
    value: Codeudor 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toCarpeta(
    json: string 
  ): Carpeta {
    return JSON.parse(
      json 
    );
  }

  public static carpetaToJson(
    value: Carpeta 
  ): string {
    return JSON.stringify(
      value 
    );
  }

  public static toActuacion(
    json: string 
  ): Actuacion {
    return JSON.parse(
      json 
    );
  }

  public static actuacionToJson(
    value: Actuacion 
  ): string {
    return JSON.stringify(
      value 
    );
  }
}
