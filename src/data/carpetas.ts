
import * as fs from 'fs/promises';
import xlsx from 'xlsx';
import {  Bancolombia, Insolvencia, LiosJuridico, RawDb, RawWorkSheets, Reintegra, Terminado } from '../types/raw-db';


const workbook = xlsx.readFile(
  '/srv/new/nube/bases_de_datos/general.xlsx', {
    cellDates: true,
  }
);

const {
  SheetNames, Sheets,
} = workbook;

const mapSheets = new Map();

for ( const sheetname of SheetNames ) {
  const sheet = Sheets[ sheetname ];

  const jsonSheet = xlsx.utils.sheet_to_json(
    sheet
  );
  mapSheets.set(
    sheetname, jsonSheet
  );
}


const mapSheetsObject = Object.fromEntries(
  mapSheets.entries()
) as RawWorkSheets;

const mapSheetsArray = Array.from(
  mapSheets.values()
);
foro;

const procesosBancolombia = Sheets[ SheetNames[ 0 ] ];

const procesosReintegra = Sheets[ SheetNames[ 1 ] ];

const procesosTerminados = Sheets[ SheetNames[ 2 ] ];

const procesosInsolvencia = Sheets[ SheetNames[ 3 ] ];

const procesosLiosJuridicos= Sheets[ SheetNames[ 4 ] ];

console.log(
  procesosBancolombia[ 'W3' ]
);


const tableBancolombia: Bancolombia[] = xlsx.utils.sheet_to_json(
  procesosBancolombia,
);

const mapBancolombia = tableBancolombia.map(
  (
    table
  ) => {
    return {
      ...table,
      category: 'Bancolombia'
    };
  }
);

const tableReintegra: Reintegra[] = xlsx.utils.sheet_to_json(
  procesosReintegra,
);

const mapReintegra = tableReintegra.map(
  (
    table
  ) => {
    return {
      ...table,
      category: 'Reintegra'
    };
  }
);

const tableInsolvencia: Insolvencia[] = xlsx.utils.sheet_to_json(
  procesosInsolvencia,
);

const mapInsolvencia = tableInsolvencia.map(
  (
    table
  ) => {
    return {
      ...table,
      category: 'Insolvencia'
    };
  }
);

const tableLiosJuridicos: LiosJuridico[] = xlsx.utils.sheet_to_json(
  procesosLiosJuridicos,
);

const mapLiosJuridicos = tableLiosJuridicos.map(
  (
    table
  ) => {
    return {
      ...table,
      category: 'LiosJuridicos'
    };
  }
);

const tableTerminados: Terminado[]  = xlsx.utils.sheet_to_json(
  procesosTerminados,
);

const mapTerminados = tableTerminados.map(
  (
    table
  ) => {
    return {
      ...table,
      category: 'Terminados'
    };
  }
);

console.log(
  Sheets
);
fs.writeFile(
  'worksheetsObject.json', JSON.stringify(
    mapSheetsObject
  )
);
fs.writeFile(
  'worksheetsArray.json', JSON.stringify(
    mapSheetsArray
  )
);

const Carpetas = [
  ...mapBancolombia,
  ...mapTerminados,
  ...mapInsolvencia,
  ...mapReintegra,
  ...mapLiosJuridicos
].sort(
  (
    a, b
  ) => {

    const x = a.NUMERO;

    const y = b.NUMERO;

    if ( x < y ) {
      return -1;
    } else if ( x > y ) {
      return 1;
    }

    return 0;
  }
);

console.log(
  Carpetas
);

const jsonTable = JSON.stringify(
  Carpetas
);
fs.writeFile(
  `${  SheetNames[ 0 ]  }.json`, jsonTable
);

export default Carpetas as unknown as RawDb[];
