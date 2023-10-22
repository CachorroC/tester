import { CarpetaRaw, Category, Codeudor, IntDemanda, IntDeudor, TipoProceso } from '../types/carpetas';
import { Demanda } from './demanda';

export class Carpeta {
  llaveProceso: string | null;

  constructor(
    {
      llaveProceso,
      codeudor,
      category,
      deudor,
      demanda,
      numero
    }: CarpetaRaw
  ) {
    this.llaveProceso = llaveProceso
      ? llaveProceso
      : null;
    this.category = category;
    this.codeudor = codeudor;
    this.numero = numero;
    this.tipoProceso = demanda.tipoProceso
      ? ( demanda.tipoProceso as TipoProceso )
      : 'SINGULAR';
    this.deudor = new Deudor(
      deudor
    );
    this.cc = Number(
      deudor.cedula
    );
    this.demanda = new Demanda(
      demanda, llaveProceso
    );
  }
  numero: number;
  cc: number;
  idProcesos: number[];
  category: Category;
  tipoProceso: TipoProceso;
  deudor: IntDeudor;
  codeudor?: Codeudor;
  demanda: IntDemanda;
  get nombre() {
    const nombres
      = this.deudor.primerNombre
      + ( this.deudor.segundoNombre
        ? ' ' + this.deudor.segundoNombre
        : ' ' );

    const apellidos = this.deudor.segundoApellido
      ? this.deudor.primerApellido
        + ' '
        + this.deudor.segundoApellido
      : this.deudor.primerApellido;

    const rawName = nombres + apellidos;

    return rawName;
  }

  set _llaveProceso(
    llave: string
  ) {
    const fixedllave = llave.trim();

    const llaveLength = fixedllave.length;

    if ( llaveLength < 23 ) {
      throw new Error(
        'la llaveProceso para esta clase es menor a 23 caracteres'
      );
    }

    this.llaveProceso = fixedllave;
  }
  get _llaveProceso() {
    return this.llaveProceso ?? 'Sin especificar';
  }
}
