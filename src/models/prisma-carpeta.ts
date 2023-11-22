import { Carpeta,
  Category,
  Demanda,
  Deudor,
  Prisma,
  TipoProceso, } from '@prisma/client';
import { IntCarpeta } from '../types/carpetas';
import { Decimal } from '@prisma/client/runtime/library';

export class PrismaCarpeta implements Carpeta {
  constructor(
    {
      numero,
      nombre,
      llaveProceso,
      idProcesos,
      fecha,
      category
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
  }
  terminado: boolean;
  revisado: boolean;
  updatedAt!: Date;
  numero: number;
  llaveProceso: string | null;
  nombre: string;
  idProcesos: number[];
  category: Category;
  fecha: Date | null;
  id!: number;
}

export class PrismaDeudor implements Deudor {
  constructor(
    {
      deudor:{
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        tel,
        email,
        direccion,
        cedula,
      },
      numero,
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
    this.carpetaNumero = numero;
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
  carpetaNumero: number;

}

export class PrismaDemanda implements Demanda {
  id!: number;
  departamento: string | null;
  capitalAdeudado: Decimal | null;
  entregaGarantiasAbogado: Date | null;
  tipoProceso: TipoProceso;
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
      demanda: {
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
      },
      numero
    }: IntCarpeta
  ) {
    this.carpetaNumero = numero;
    this.expediente = expediente;
    this.municipio = municipio;
    this.entregaGarantiasAbogado = entregaGarantiasAbogado
      ? entregaGarantiasAbogado.toString() !== 'Invalid Date'
        ? new Date(
          entregaGarantiasAbogado.toString()
        )
        : null
      : null;

    this.tipoProceso = tipoProceso;
    this.despacho = null;
    this.fechaPresentacion = fechaPresentacion
      ? fechaPresentacion.toString() !== 'Invalid Date'
        ? new Date(
          fechaPresentacion.toString()
        )
        : null
      : null;
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
    this.departamento = departamento;

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
  }
  despacho: string | null;
}


export type CarpetaInstante = InstanceType<typeof PrismaCarpeta>