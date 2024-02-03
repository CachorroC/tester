
import * as fs from 'fs/promises';
import xlsx from 'xlsx';
import { RawDb,  } from '../types/raw-db';

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


const mapSheetsArray = Array.from(
  mapSheets.values()
)
  .flat() as RawDb[];

const fechasDePresentacion = mapSheetsArray.map(
  (
    sheet
  ) => {
    return sheet.FECHA_PRESENTACION_DEMANDA;
  }
);

const capitalesAdeudados = mapSheetsArray.map(
  (
    sheet
  ) => {
    return sheet.VALOR_CAPITAL_ADEUDADO;
  }
);


fs.writeFile(
  'fechasDePresentacion.json', JSON.stringify(
    fechasDePresentacion
  )
);
fs.writeFile(
  'capitalesAdeudados.json', JSON.stringify(
    capitalesAdeudados
  )
);