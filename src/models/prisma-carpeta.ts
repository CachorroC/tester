import { $Enums,
  Actuacion,
  Carpeta,
  Category,
  Demanda,
  Deudor,
  Prisma,
  Proceso,
  TipoProceso, } from '@prisma/client';
import { IntCarpeta } from '../types/carpetas';
import { Decimal } from '@prisma/client/runtime/library';
import { intProceso } from '../types/procesos';
import { intActuacion } from '../types/actuaciones';
import { ClassDemanda } from './demanda';

export class PrismaCarpeta implements Carpeta {
  constructor(
    {
      numero,
      nombre,
      llaveProceso,
      idProcesos,
      fecha,
      category,
    }: IntCarpeta 
  ) {
    this.numero = numero;
    this.nombre = nombre;
    this.fecha = fecha
      ? fecha.toString() !== 'Invalid Date'
        ? fecha
        : null
      : null;
    this.llaveProceso = llaveProceso;
    this.category = category;
    this.idProcesos = idProcesos
      ? idProcesos
      : [];
    this.revisado = false;
    this.terminado = category === 'Terminados';
    this.idRegUltimaAct = null;
  }
  category: $Enums.Category;
  fecha: Date | null;
  idProcesos: number[];
  idRegUltimaAct: number | null;
  llaveProceso: string;
  nombre: string;
  numero: number;
  revisado: boolean;
  terminado: boolean;
  updatedAt!: Date;
}

export class PrismaDeudor implements Deudor {
  constructor(
    {
      deudor: {
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        tel,
        email,
        direccion,
        cedula,
      },
    }: IntCarpeta 
  ) {
    this.primerNombre = primerNombre;
    this.segundoNombre = segundoNombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido
      ? typeof segundoApellido === 'string'
        ? segundoApellido
        : segundoApellido.toString()
      : null;
    this.direccion = direccion;
    this.email = email;
    this.telCelular = tel.celular
      ? String(
        tel.celular 
      )
      : null;
    this.telFijo = tel.fijo
      ? String(
        tel.fijo 
      )
      : null;
    this.cedula = String(
      cedula 
    );
  }
  telCelular: string | null;
  telFijo: string | null;
  id!: number;
  cedula: string;
  primerNombre: string;
  primerApellido: string;
  segundoNombre: string | null;
  segundoApellido: string | null;
  direccion: string | null;
  email: string | null;
  carpetaNumero!: number;
}

export class PrismaDemanda implements Demanda {
  id!: number;
  departamento: string | null;
  capitalAdeudado: Decimal | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProceso;
  idProceso: number;
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date[];
  municipio: string | null;
  obligacion: string[];
  radicado: string | null;
  vencimientoPagare: Date[];

  constructor(
    {
      numero, demanda 
    }: IntCarpeta, proceso?: intProceso 
  ) {
    const {
      departamento,
      llaveProceso,
      obligacion,
      municipio,
      vencimientoPagare,
      radicado,
      fechaPresentacion,
      etapaProcesal,
      mandamientoPago,
      tipoProceso,
      entregaGarantiasAbogado,
      capitalAdeudado,
    } = new ClassDemanda(
      demanda, numero, proceso 
    );
    this.llaveProceso = proceso
      ? proceso.llaveProceso
      : llaveProceso;
    this.municipio = municipio
      ? municipio
      : null;
    this.idProceso = proceso
      ? proceso.idProceso
      : numero;
    this.entregaGarantiasAbogado = entregaGarantiasAbogado
      ? entregaGarantiasAbogado.toString() !== 'Invalid Date'
        ? new Date(
          entregaGarantiasAbogado.toString() 
        )
        : null
      : null;

    this.tipoProceso = tipoProceso;
    this.despacho = proceso
      ? proceso.despacho
      : null;
    this.fechaPresentacion = fechaPresentacion;
    this.etapaProcesal = etapaProcesal;
    this.mandamientoPago = mandamientoPago
      ? mandamientoPago.toString() !== 'Invalid Date'
        ? new Date(
          mandamientoPago.toString() 
        )
        : null
      : null;
    this.radicado = radicado;
    this.capitalAdeudado = new Prisma.Decimal(
      capitalAdeudado
        ? capitalAdeudado
        : 1000,
    );
    this.obligacion = obligacion.map(
      (
        obl 
      ) => {
        return String(
          obl 
        );
      } 
    );
    this.departamento = proceso
      ? proceso.departamento
      : departamento;

    this.vencimientoPagare = vencimientoPagare.map(
      (
        venc 
      ) => {
        if ( !venc || venc === null || venc.toString() === 'Invalid Date' ) {
          return new Date();
        }

        return new Date(
          venc.toString() 
        );
      } 
    );
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
  }
  carpetaNumero!: number;
  idConexion: number | null;
  llaveProceso: string | null;
  fechaProceso: Date | null;
  fechaUltimaActuacion: Date | null;
  sujetosProcesales: string | null;
  esPrivado: boolean | null;
  cantFilas: number | null;
  despacho: string | null;
}

export type CarpetaInstante = InstanceType<typeof PrismaCarpeta>;

export class PrismaProceso implements Proceso {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso: Date | null;
  fechaUltimaActuacion: Date | null;
  despacho: string;
  departamento: string;
  sujetosProcesales: string;
  esPrivado: boolean;
  cantFilas: number;
  constructor(
    {
      idProceso,
      idConexion,
      llaveProceso,
      fechaProceso,
      fechaUltimaActuacion,
      despacho,
      departamento,
      sujetosProcesales,
      esPrivado,
      cantFilas,
    }: intProceso,
    carpetaNumero: number,
  ) {
    this.idProceso = idProceso;
    this.idConexion = idConexion;
    this.llaveProceso = llaveProceso;
    this.fechaProceso = fechaProceso
      ? new Date(
        fechaProceso 
      )
      : null;
    this.fechaUltimaActuacion = fechaUltimaActuacion
      ? new Date(
        fechaUltimaActuacion 
      )
      : null;
    this.despacho = despacho;
    this.departamento = departamento;
    this.sujetosProcesales = sujetosProcesales;
    this.esPrivado = esPrivado;
    this.cantFilas = cantFilas;
    this.carpetaNumero = carpetaNumero;
    this.juzgadoTipo = despacho;
  }
  juzgadoTipo: string | null;
  demandaId!: number | null;
  carpetaNumero: number;
  id!: number;
}

export class PrismaActuacion implements Actuacion {
  id!: number;
  isUltimaAct: boolean;
  createdAt!: Date;
  idRegActuacion: number;
  llaveProceso: string;
  consActuacion: number;
  fechaActuacion: Date;
  actuacion: string;
  anotacion: string | null;
  fechaInicial: Date | null;
  fechaRegistro: Date;
  fechaFinal: Date | null;
  codRegla: string;
  conDocumentos: boolean;
  cant: number;
  constructor(
    {
      actuacion,
      anotacion,
      fechaRegistro,
      fechaActuacion,
      fechaInicial,
      fechaFinal,
      cant,
      codRegla,
      conDocumentos,
      consActuacion,
      idRegActuacion,
      llaveProceso,
      idProceso,
    }: intActuacion,
    carpetaNumero?: number,
  ) {
    this.actuacion = actuacion;
    this.anotacion = anotacion;
    this.cant = cant;
    this.codRegla = codRegla;
    this.conDocumentos = conDocumentos;
    this.consActuacion = consActuacion;
    this.fechaActuacion = new Date(
      fechaActuacion 
    );
    this.fechaFinal = fechaFinal
      ? new Date(
        fechaFinal 
      )
      : null;
    this.fechaInicial = fechaInicial
      ? new Date(
        fechaInicial 
      )
      : null;
    this.fechaRegistro = new Date(
      fechaRegistro 
    );
    this.idRegActuacion = idRegActuacion;
    this.llaveProceso = llaveProceso;
    this.isUltimaAct = cant === consActuacion
      ? true
      : false;
    this.idProceso = idProceso;
    this.procesoId = idProceso;
    this.carpetaNumero = carpetaNumero
      ? carpetaNumero
      : null;
  }
  idProceso: number;
  procesoId: number | null;
  carpetaNumero: number | null;
}
