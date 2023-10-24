import { DeudorRaw, IntDeudor, IntTel } from '../types/carpetas';

export class Tel implements IntTel {
  fijo: number | null;
  celular: number | null;
  constructor(
    telefono: string
  ) {
    const celularStringArray
      = telefono.match(
        /\d{10}/g
      );

    const fijoStringArray
      = telefono.match(
        /\d{7}\s/g
      );

    const celularNumber = celularStringArray?.map(
      (
        f
      ) => {
        return Number(
          f
        );
      }
    );

    const fijoNumber = fijoStringArray?.map(
      (
        f
      ) => {
        return Number(
          f
        );
      }
    );

    this.fijo = fijoNumber
      ? fijoNumber[ 0 ]
      : null;
    this.celular = celularNumber
      ? celularNumber[ 0 ]
      : null;
  }
}


export class Deudor implements IntDeudor {
  constructor(
    {
      cedula,
      direccion,
      email,
      nombre,
      telefono = ''
    }: DeudorRaw
  ) {
    this.cedula = Number(
      cedula
    );
    this.direccion = direccion
      ? direccion.toString()
      : null;
    this.email = email
      ? email.toString()
      : null;
    this.tel = new Tel(
      String(
        telefono
      )
    );

    const nameStringArray = nombre.split(
      ' '
    );

    const nameArrayLength
      = nameStringArray.length;

    switch ( nameArrayLength ) {
        case 4:
          [
            this.primerNombre,
            this.segundoNombre,
            this.primerApellido,
            this.segundoApellido
          ] = nameStringArray;

          break;

        case 2:
          [
            this.primerNombre,
            this.primerApellido
          ] = nameStringArray;

          this.segundoApellido = null;
          this.segundoNombre = null;

          break;

        case 1:
          [
            this.primerNombre
          ] = nameStringArray;
          this.primerApellido = 'sin especificar';
          this.segundoApellido = null;
          this.segundoNombre = null;

          break;

        case 3:
          [
            this.primerNombre,
            this.primerApellido,
            this.segundoApellido
          ] = nameStringArray;
          this.segundoNombre = null;

          break;

        default:
          [
            this.primerNombre,
            this.segundoNombre,
            this.primerApellido,
            ...this.segundoApellido
          ] = nameStringArray;

          break;
    }
  }
  tel: IntTel;
  primerNombre: string;
  segundoNombre: string | null;
  primerApellido: string;
  segundoApellido: string |string[]| null;
  cedula: number;
  direccion: string | null;
  email: string | null;
}
