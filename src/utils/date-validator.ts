/*

//SECTION Carpeta example
for ( const carpeta of Carpetas ) {
  const dateEntries = new Map();

  dateEntries.set(
    'numero', carpeta.NUMERO
  );

  const carpetaEntries = Object.entries(
    carpeta
  );


  for ( const [
    key,
    value
  ] of carpetaEntries ) {
    const matchedFechansKey = key.search(
      /(FECHA+)/gm
    );

    if ( matchedFechansKey >= 0 ) {
      const dateValue = datesExtractor(
        value
      );
      console.log(
        `${ value } ====> ${ dateValue }`
      );
      dateEntries.set(
        key, dateValue
      );
    }
  }

  const fechaCarpeta = Object.fromEntries(
    dateEntries
  );
  console.log(
    JSON.stringify(
      fechaCarpeta, null, 2
    )
  );
} */

//!SECTION
//SECTION first step: extract the date
export function datesExtractor(
  incomingDate?: string | number | Date | null 
) {
  const outputDates: Date[] = [];

  if ( !incomingDate ) {
    return outputDates;
  }

  if ( typeof incomingDate === 'object' ) {
    outputDates.push(
      incomingDate 
    );
    return outputDates;
  }

  if ( typeof incomingDate === 'number' ) {
    const outgoingDate = new Date(
      ( incomingDate - ( 25567 + 1 ) ) * 86400 * 1000 
    );
    console.log(
      `${ incomingDate } ===> ${ outgoingDate }` 
    );
    outputDates.push(
      outgoingDate 
    );
    return outputDates;
  }

  const splitByDoubleSlash = incomingDate.split(
    '//' 
  );

  for ( const splitted of splitByDoubleSlash ) {
    const fixed = fixSingleFecha(
      splitted 
    );

    for ( const fixedDate of fixed ) {
      outputDates.push(
        fixedDate 
      );
    }
  }

  return dateArrayValidator(
    outputDates 
  );
}
//!SECTION
//SECTION secondStep: fix the extracted date

export function fixSingleFecha(
  rawFecha: string 
) {
  const datesOutput: Date[] = [];

  const utcStyleMatch = rawFecha.matchAll(
    /(\d{2,4})-(\d{1,2})-(\d{1,2})/gm 
  );

  const melissaStyleFecha = rawFecha.matchAll(
    /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/gm,
  );

  for ( const utcStyleMatched of utcStyleMatch ) {
    const [
      allmatched,
      yearMatched,
      monthMatched,
      dayMatched
    ] = utcStyleMatched;
    let newYear;
    console.log(
      allmatched 
    );

    if ( yearMatched.length === 2 ) {
      newYear = yearMatched.padStart(
        4, '20' 
      );
    } else if ( yearMatched.length === 3 ) {
      const postYear = yearMatched.substring(
        1, 3 
      );
      newYear = postYear.padStart(
        4, '20' 
      );
    } else {
      newYear = yearMatched;
    }

    const outputDate = new Date(
      Number(
        newYear 
      ),
      Number(
        monthMatched 
      ) - 1,
      Number(
        dayMatched.padStart(
          2, '0' 
        ) 
      ),
    );

    datesOutput.push(
      outputDate 
    );
  }

  for ( const melissaStyleMatched of melissaStyleFecha ) {
    const [
      allmatched,
      dayMatched,
      monthMatched,
      yearMatched
    ]
      = melissaStyleMatched;
    let newYear;
    console.log(
      allmatched 
    );

    if ( yearMatched.length === 2 ) {
      newYear = yearMatched.padStart(
        4, '20' 
      );
    } else if ( yearMatched.length === 3 ) {
      const postYear = yearMatched.substring(
        1, 3 
      );
      newYear = postYear.padStart(
        4, '20' 
      );
    } else {
      newYear = yearMatched;
    }

    const outputDate = new Date(
      Number(
        newYear 
      ),
      Number(
        monthMatched 
      ) - 1,
      Number(
        dayMatched.padStart(
          2, '0' 
        ) 
      ),
    );

    datesOutput.push(
      outputDate 
    );
  }

  return datesOutput;
}

//!SECTION
export function dateValidator(
  incomingDate: Date 
): Date | null {
  const stringifiedDate = incomingDate.toString();

  const dateYear = incomingDate.getFullYear();

  if ( stringifiedDate === 'Invalid Date' || dateYear <= 2000 ) {
    return null;
  }

  return incomingDate;
}

export function dateArrayValidator(
  incomingDates: Date[] 
): Date[] {
  const outPutDates = [];

  for ( const date of incomingDates ) {
    const ndate = dateValidator(
      date 
    );

    if ( ndate ) {
      outPutDates.push(
        ndate 
      );
    }
  }

  return outPutDates;
}
