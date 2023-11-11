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
      ? BigInt(
        tel.celular 
      )
      : null;
    this.telFijo = tel.fijo
      ? BigInt(
        tel.fijo 
      )
      : null;
    this.carpetaNumero = carpetaNumero;
    this.cedula = String(
      cedula 
    );
  }
  telCelular: bigint | null;
  telFijo: bigint | null;
  id!: number;
  cedula: string;
  primerNombre: string;
  primerApellido: string;
  segundoNombre: string | null;
  segundoApellido: string | null;
  direccion: string | null;
  email: string | null;
  carpetaNumero: number;
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
