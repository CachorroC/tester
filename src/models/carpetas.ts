import { Category, IntCarpeta, IntDemanda, IntDeudor, TipoProceso } from '../types/carpetas';

export class Carpeta implements IntCarpeta {
  numero: number;
  cc: number;
  llaveProceso: string | null;
  idProcesos?: number[] | undefined;
  category: Category;
  tipoProceso: TipoProceso;
  nombre: string;
  deudor: IntDeudor;
  demanda: IntDemanda;
  constructor (
    {
      numero, nombre, llaveProceso,
    }: { numero: number;  nombre?: string; llaveProceso?: string}
  ) {
    this.numero = numero;
    this.nombre = nombre;
    this.llaveProceso = llaveProceso;
  }
}