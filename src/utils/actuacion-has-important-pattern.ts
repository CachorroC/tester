import { client } from '../services/prisma';

async function actuacionesGetAuto () {
  const actuaciones = await client.actuacion.findMany();
}

export function actuacionHasAuto(
  incomingActuacion: intActuacion 
) {
  const {
    actuacion, fechaActuacion, cant, consActuacion 
  } = incomingActuacion;

  const matcherActuacion = actuacion.matchAll(
    /([Aa][Uu][Tt][Oo]+)([A-Z a-zÓÍÚÉÀóíúáé,.()\w/\s]+)/gm,
  );

  for ( const matchedPattern of matcherActuacion ) {
    console.log(
      matchedPattern 
    );
  }
}
