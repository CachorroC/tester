import { IntDeudor } from '../types/carpetas';
import { RawDb } from '../types/raw-db';
import { client } from './newJudicial';

export class Tel {
  fijo: string | null;
  celular: string | null;
  constructor(
    telefono: string
  ) {
    const celularStringArray = telefono.match(
      /\d{10}/g
    );

    const fijoStringArray = telefono.match(
      /\d{7}\s/g
    );

    const celularNumber = celularStringArray?.map(
      (
        f
      ) => {
        return String(
          f
        );
      }
    );

    const fijoNumber = fijoStringArray?.map(
      (
        f
      ) => {
        return String(
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

export class ClassDeudor implements IntDeudor {
  constructor(
    rawCarpeta: RawDb
  ) {

    const {
      DEMANDADO_IDENTIFICACION: cedula, DEMANDADO_DIRECCION: direccion, DEMANDADO_EMAIL: email, DEMANDADO_TELEFONOS: telefono, DEMANDADO_NOMBRE: nombre, NUMERO: id
    } = rawCarpeta;
    this.id = Number(
      id
    );
    this.cedula = String(
      cedula
    );
    this.direccion = direccion
      ? direccion.toString()
      : null;
    this.email = email
      ? email.toString()
      : null;

    const {
      fijo, celular
    } = new Tel(
      String(
        telefono
      )
    );
    this.telCelular = celular;
    this.telFijo = fijo;

    const nameStringArray = nombre.split(
      ' '
    );

    const nameArrayLength = nameStringArray.length;

    switch ( nameArrayLength ) {
        case 4:
          [
            this.primerNombre,
            this.segundoNombre,
            this.primerApellido,
            this.segundoApellido,
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
          [ this.primerNombre ] = nameStringArray;
          this.primerApellido = 'sinEspecificar';
          this.segundoApellido = null;
          this.segundoNombre = null;

          break;

        case 3:
          [
            this.primerNombre,
            this.segundoNombre,
            this.primerApellido
          ]
          = nameStringArray;
          this.segundoApellido = null;

          break;

        default:
          [
            this.primerNombre,
            this.segundoNombre,
            this.primerApellido,
            this.segundoApellido,
          ] = nameStringArray;

          break;
    }
  }
  id: number;
  telCelular: string | null;
  telFijo: string | null;
  primerNombre: string;
  segundoNombre: string | null;
  primerApellido: string;
  segundoApellido: string | null;
  cedula: string;
  direccion: string | null;
  email: string | null;
  async prismaUpdateDeudor () {
    try {
      const upserter = await client.deudor.upsert(
        {
          where: {
            id: this.id
          },
          create: {
            id             : this.id,
            telCelular     : this.telCelular,
            cedula         : this.cedula,
            primerApellido : this.primerApellido,
            primerNombre   : this.primerNombre,
            segundoApellido: this.segundoApellido,
            direccion      : this.direccion,
            segundoNombre  : this.segundoNombre,
            email          : this.email,
            carpeta        : {
              connect: {
                numero: this.id
              }
            },
          },
          update: {
            id             : this.id,
            telCelular     : this.telCelular,
            cedula         : this.cedula,
            primerApellido : this.primerApellido,
            primerNombre   : this.primerNombre,
            segundoApellido: this.segundoApellido,
            direccion      : this.direccion,
            segundoNombre  : this.segundoNombre,
            email          : this.email,
            carpeta        : {
              connect: {
                numero: this.id
              }
            },
          }
        }
      );
      return upserter;
    } catch ( error ) {
      console.log(
        `ClassDemanda prismaUpdateDemanda ${ JSON.stringify(
          error
        ) }`
      );
      return null;
    }
  }
}
