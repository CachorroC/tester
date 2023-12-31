// To parse this data:
//
//   import { Convert } from "./file
//
//   const CarpetaRaw = Convert.toCarpetaRaw(json);

import { intActuacion } from './actuaciones';
import { intProceso } from './procesos';

export interface TrulyCruda {
  demanda: DemandaRaw;
  codeudor?: rawCodeudor;
  deudor: DeudorRaw;
  numero: number;
}

export interface CarpetaRaw extends TrulyCruda {
  category: Category;
}

export type keyOfCarpetaRaw = keyof CarpetaRaw;

export interface IntCarpeta {
  category: Category;
  codeudor: Codeudor | null;
  demanda: IntDemanda;
  deudor: IntDeudor;
  fecha: Date | null;
  idProcesos: number[];
  idRegUltimaAct: number | null;
  llaveProceso: string;
  nombre: string;
  notificacion: intNotificacion | null;
  numero: number;
  procesos: intProceso[];
  revisado: boolean;
  terminado: boolean;
  tipoProceso: TipoProceso;
  ultimaActuacion: intActuacion | null;
  updatedAt: Date;
}

export interface flatCarpeta {
  llaveProceso?: string;
  idProcesos?: number[];
  category: Category;
  categoryTag: number;
  deudor: IntDeudor;
  numero: number;
  tipoProceso: TipoProcesoRaw;

  capitalAdeudado: number;
  departamento: string | null;
  entregaGarantiasAbogado: Date;
  mandamientoPago: Date;
  etapaProcesal?: string;
  fechaPresentacion?: Date;
  municipio: string;
  obligacion: Obligacion;
  radicado: string;
  vencimientoPagare: Date[];
  juzgados: Juzgado[];
}

export type Obligacion = {
  A?: string | number;
  B?: string | number;
};

export type Category =
  | 'Terminados'
  | 'LiosJuridicos'
  | 'Bancolombia'
  | 'Reintegra'
  | 'Insolvencia'
  | 'SinEspecificar'
  | 'todos';

export interface Codeudor {
  cedula: string | null;
  nombre: string | null;
  id: number;
  direccion: string | null;
  telefono: string | null;
}

export interface rawCodeudor {
  cedula?: number | string;
  nombre?: number | string;
  direccion?: number | string;
  telefono?: number | string;
}

export interface DemandaRaw {
  llaveProceso: string;
  capitalAdeudado?: number | string;
  departamento?: DepartamentoRaw;
  entregaGarantiasAbogado?: number | string;
  tipoProceso?: TipoProcesoRaw;
  mandamientoPago?: string;
  medidasCautelares?: {
    fechaOrdenaMedidas?: string;
    medidaSolicitada?: string;
  };
  etapaProcesal?: number | string;
  fechaPresentacion?: number | string;
  municipio?: string;
  obligacion?: {
    A?: number | string;
    B?: number | string;
  };
  notificacion?: rawNotificacion;
  radicado?: number | string;
  vencimientoPagare?: number | string;
}

export interface rawNotificacion {
  '291'?: The291;
  '292'?: The292;
  certimail?: string;
  fisico?: FisicoEnum | number;
  tipo?: number | string;
  autoNotificado?: number | string;
}

export type ResultadoEnum =
  | ''
  | '31/03/1901'
  | 'POSITIVO'
  | 'CERTIMAIL'
  | '06/07/2018'
  | 'FISICA'
  | 'NEGATIVO'
  | 'FISICO'
  | '20/06/2018 JAIME'
  | '28/11/2017'
  | '09/04/2018 CERTIMAIL'
  | '15/06/2018'
  | '14/09/2018 WILSON'
  | 'PERSONAL'
  | '20/06/2018'
  | '8/03/2018'
  | '16/05/2018'
  | '14/09/2018 GLADIS'
  | '04/05/2018'
  | '06/06/2018'
  | '20/06 ANGELICA FISICO'
  | '10/06/2018'
  | '18/07/2018'
  | '11/05/2018';

export type FisicoEnum =
  | ''
  | 'NO'
  | 'PERSONAL'
  | 'EMBARGO VEHICULO'
  | 'SI'
  | 'INMUEBLE'
  | 'EMBARGO APTO'
  | 'NO TIENE EN CUENTA'
  | 'VEHICULO'
  | 'INMUEBLE/BANCOS'
  | 'CERTIMAIL'
  | '13/09/2017'
  | 'X'
  | 'ENVIADO 292 24/08/2018'
  | 'FISICO'
  | 'ENVIADO 24/08'
  | 'OK'
  | '17/09/2018 ENVIO 291'
  | '30/10/2018'
  | '13/11/2018';

export interface The291 {
  fechaRecibido?: number | string;
  resultado?: number | string;
  fechaAporta?: number | string;
}

export interface The292 {
  fechaRecibido?: string;
  fechaAporta?: number | string;
  resultado?: ResultadoEnum | number;
}

export type DepartamentoRaw =
  | 'CUNDINAMARCA'
  | 'ATLANTICO'
  | 'META'
  | 'CUNDINNAMARCA'
  | 'CUNDINAMARCA '
  | '18/01/2018'
  | 'SINGULAR'
  | 'HIPOTECARIO'
  | 'TOLIMA'
  | 'CUN DINAMARCA'
  | 'CUNDINNAMARCA '
  | 'BOYACÁ'
  | 'CUNDINAMRCA'
  | 'CNDINAMARCA'
  | '';

export interface DeudorRaw {
  cedula: number | string;
  direccion?: number | string;
  email?: number | string;
  nombre: string;
  telefono?: number | string;
}

export interface IntDeudor {
  cedula: number;
  direccion: string | null;
  email: string | null;
  primerNombre: string;
  segundoNombre: string | null;
  primerApellido: string;
  segundoApellido: string | null;
  tel: IntTel;
}

export interface IntTel {
  fijo: number | null;
  celular: number | null;
}

export interface IntDemanda {
  capitalAdeudado: number | null;
  entregaGarantiasAbogado: Date | null;
  municipio: string | null;
  obligacion: ( number | string )[];
  radicado: string | null;
  llaveProceso: string | null;
  id: number;
  departamento: string | null;
  tipoProceso: TipoProceso;
  mandamientoPago: Date | null;
  etapaProcesal: null | string;
  vencimientoPagare: Date[];
  carpetaNumero: number;
  despacho: null | string;
  fechaPresentacion: Date[];
  medidasCautelares: {
    fechaOrdenaMedida: Date | null;
    medidaSolicitada: string | null;
  } | null;
}

export interface intNotificacion {
  certimail: boolean | null;
  fisico: boolean | null;
  autoNotificado: string | null;
  '291'?: the290;
  '292'?: the290;
}

export interface the290 {
  fechaRecibido: Date | null;
  resultado: boolean | null;

  fechaAporta: Date | null;
}

export interface intNotifier {
  id: number;
  tipo: '291' | '292';
  fechaRecibido: Date | null;
  resultado: boolean | null;
  fechaAporta: Date | null;
}

export interface Juzgado {
  id: number;
  tipo: string;
  url: string;
}

export type TipoProcesoRaw =
  | 'HIPOTECARIO'
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO'
  | 'SINGULAR ACUM HIPOTECARIO'
  | '11001400308320170071700'
  | '25473418900120170092400'
  | 'PRENDARO'
  | ' HIPOTECARIO'
  | 'HMM PISO 1'
  | '  SINGULAR'
  | 'HIPOTECARIA'
  | 'HIPOTECARO'
  | 'SINGULAR ACUMULADO CON HIPOTECARIO CAJA SOCIAL'
  | 'SOACHA'
  | 'ACUMULADO'
  | 'HIPOTECARIO ';

export type TipoProceso =
  | 'HIPOTECARIO'
  | 'PRENDARIO'
  | 'SINGULAR'
  | 'ACUMULADO';
