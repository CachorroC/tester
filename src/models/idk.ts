import carpetas from '../data/carpetas';

const carpsMap = carpetas.map(
  (
    carpeta
  ) => {
    return fechaPresentacionBuilder(
      carpeta.demanda.fechaPresentacion
    );
  }
);

console.log(
  carpsMap
);

function fechaPresentacionBuilder (
  rawFechaPresentacion? : string | number
) {
  if ( !rawFechaPresentacion ) {
    return [];
  }

  const isNumber = typeof rawFechaPresentacion === 'number';

  if ( isNumber ) {
    return [
      new Date(
        rawFechaPresentacion
      )
    ];
  }

  const rawFechaPresentacionLength = rawFechaPresentacion.length;

  if ( rawFechaPresentacionLength <= 12 ) {
    //* Hay solamente una fecha
    const fechaFixed = fixSingleFecha(
      rawFechaPresentacion
    );

    if ( !fechaFixed ) {
      return [];
    }

    return [fechaFixed];

  }

  const [
    firstFecha,
    secondFecha,
    ...restFechas
  ]= rawFechaPresentacion.split(
    '//'
  );

  console.log(
    firstFecha.length
  );

  if ( firstFecha.length <= 12 ) {
    //* Es una la primer fecha de presentacion
    const fechaFixed = fixSingleFecha(
      firstFecha
    );

  }



}

function fixSingleFecha (
  rawFecha: string
) {

  const [
    rawDay,
    rawMonth,
    rawYear
  ] = rawFecha.trim()
    .split(
      '/'
    );
  console.log(
    rawDay
  );
  console.log(
    rawMonth
  );
  console.log(
    rawYear
  );

  const stringDate = new Date(
    Number(
      rawYear
    ),
    Number(
      rawMonth
    ) - 1, Number(
      rawDay
    )
  );

  console.log(
    `la nueva fecha del pagaré arrojó: ${ stringDate.toDateString() }`
  );

  if ( stringDate.toString() === 'Invalid Date' ) {
    return null;
  }

  return stringDate;
}
