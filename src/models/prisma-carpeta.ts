import { $Enums,
  Carpeta,
  Category,
  Demanda,
  Deudor,
  Prisma, } from '@prisma/client';
import { IntCarpeta, IntDemanda, IntDeudor } from '../types/carpetas';
import { Decimal } from '@prisma/client/runtime/library';

export class PrismaCarpeta implements Carpeta {
  numero: number;
  llaveProceso: string | null;
  nombre: string;
  idProcesos: number[];
  category: Category;
  constructor(
    {
      numero,
      nombre,
      llaveProceso,
      idProcesos,
      category,
    }: IntCarpeta 
  ) {
    this.numero = numero;
    this.nombre = nombre;
    this.llaveProceso = llaveProceso;
    this.category = category;
    this.idProcesos = idProcesos
      ? idProcesos
      : [];
  }
  id!: number;
}

export class PrismaDeudor implements Deudor {
  id!: number;
  cedula: string;
  nombre: string;
  direccion: string | null;
  email: string | null;
  telCelular: number | null;
  telFijo: number | null;
  carpetaNumero: number;
  constructor(
    {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      tel,
      email,
      direccion,
      cedula,
    }: IntDeudor,
    carpetaNumero: number,
  ) {
    this.nombre = segundoApellido
      ? segundoNombre
        ? primerNombre + segundoNombre + primerApellido + segundoApellido
        : primerNombre + primerApellido + segundoApellido
      : primerNombre + primerApellido;
    this.direccion = direccion;
    this.email = email;
    this.telCelular = tel.celular;
    this.telFijo = tel.fijo;
    this.carpetaNumero = carpetaNumero;
    this.cedula = String(
      cedula 
    );
  }
}

export class PrismaDemanda implements Demanda {
  id!: number;
  departamento: string | null;
  capitalAdeudado: Decimal | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: $Enums.TipoProceso;
  mandamientoPago: Date | null;
  etapaProcesal: string | null;
  fechaPresentacion: Date | null;
  municipio: string | null;
  obligacion: string[];
  radicado: string | null;
  vencimientoPagare: Date[];
  expediente: string | null;
  carpetaNumero: number;
  constructor(
    {
      departamento,
      expediente,
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
    }: IntDemanda,
    carpetaNumero: number,
  ) {
    this.carpetaNumero = carpetaNumero;
    this.expediente = expediente;
    this.municipio = municipio;
    this.entregaGarantiasAbogado = entregaGarantiasAbogado;
    this.tipoProceso = tipoProceso;
    this.fechaPresentacion = fechaPresentacion;
    this.etapaProcesal = etapaProcesal;
    this.mandamientoPago = mandamientoPago;
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
    this.departamento = departamento;
    this.vencimientoPagare = vencimientoPagare.map(
      (
        venc 
      ) => {
        if ( !venc || venc === null ) {
          return new Date();
        }

        return venc;
      } 
    );
  }
}
