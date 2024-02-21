import xlsx from 'xlsx';
import { Category } from '../types/carpetas';
import * as fs from 'fs/promises';
import { RawDb } from '../types/raw-db';

const workbook = xlsx.readFile(
  '/srv/new/nube/bases_de_datos/general.xlsx', {
    cellDates: true,
  }
);

const {
  SheetNames, Sheets
} = workbook;

const mapperSheets = SheetNames.flatMap(
  (
    sheetname
  ) => {
    const sheet = Sheets[ sheetname ];

    const tableSheet = xlsx.utils.sheet_to_json<RawDb>(
      sheet
    );
    return tableSheet.map(
      (
        table
      ) => {
        return {
          ...table,
          category: sheetname as Category,
        };
      }
    );
  }
);

export const Carpetas = [ ...mapperSheets ].sort(
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

fs.writeFile(
  'carpetas.json', JSON.stringify(
    Carpetas, null, 2
  )
);
