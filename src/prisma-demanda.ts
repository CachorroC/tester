import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';
import xlsx from 'xlsx';
import { Convert, RawDb } from './types/raw-db';
import { Prisma } from '@prisma/client';


const workbook = xlsx.readFile(
  '/srv/new/nube/bases_de_datos/general.xlsx', {
    cellDates: true,
  }
);

const procesosBancolombia = workbook.Sheets[ workbook.SheetNames[ 0 ] ];

const table: RawDb[] = xlsx.utils.sheet_to_json(
  procesosBancolombia,
);

console.log(
  workbook.Sheets
);
fs.writeFile(
  'worksheets.json', JSON.stringify(
    workbook.Sheets
  )
);

const jsonTable = JSON.stringify(
  table
);
fs.writeFile(
  `${  workbook.SheetNames[ 0 ]  }.json`, jsonTable
);

const rawDb = Convert.toRawDb(
  jsonTable
);

/* const arrayMapper = []
for ( const workSheet of workSheetsFromFile )
{
  const { data } = workSheet;
  const [ keyNames, ...cels ] = data;

for (const row of cels) {
    const rowsMapper = row.map(
    ( cel, index ) =>
    {
return
    }
  )
}


} */


const prisma = new PrismaClient();

async function updateCarpeta(
  {
    rawCarpeta
  }: { rawCarpeta: RawDb }
) {
  const {
    NUMERO, VALOR_CAPITAL_ADEUDADO, TIPO_PROCESO, JUZGADO_DEPARTAMENTO, FECHA_ENTREGA_GARANTIAS_ABOGADO, ETAPA_PROCESAL, EXPEDIENTE,
  } = rawCarpeta;

  try {
    const prismaDemanda: Prisma.DemandaUncheckedCreateWithoutCarpetaInput = {
      id          : NUMERO,
      departamento: JUZGADO_DEPARTAMENTO,

      tipoProceso : TIPO_PROCESO,
      notificacion: {
        connectOrCreate: {
          where: {
            id: NUMERO
          },
          create: {

          }
        }
      }
    };

    const updater = await prisma.carpeta.update(
      {
        where: {
          numero: NUMERO
        },
        data: {
          demanda: {
            connectOrCreate: {
              where: {
                id: NUMERO
              },
              create: prismaDemanda
            }
          }
        },
        include: {
          demanda: {
            include: {
              medidasCautelares: true,
              notificacion     : {
                include: {
                  notifiers: true
                }
              }
            }
          },
          deudor  : true,
          procesos: {
            include: {
              juzgado: true
            }
          }
        }
      }
    );
    return updater;
  } catch ( error ) {

  }
}


async function getDemandas () {
  const demandas = await prisma.demanda.findMany(
    {
      include: {
        notificacion: {
          include: {
            notifiers: true
          }
        },
        medidasCautelares: true
      }
    }
  );

  fs.writeFile(
    'demandas.json', JSON.stringify(
      demandas
    )
  );
  return demandas;
}


console.log(
  getDemandas()
);