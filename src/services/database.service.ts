//* External Dependencies

import { Collection, Db, MongoClient } from 'mongodb';
import { IntCarpeta } from '../types/carpetas';

//* Global Variables

export const collections: { carpetas?: Collection<IntCarpeta> } = {};

//* Initialize Connection

export async function connectToDatabase () {
  const client: MongoClient = new MongoClient(
    'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority'
  );

  await client.connect();

  const db: Db = client.db(
    'RyS'
  );

  const gamesCollection: Collection<IntCarpeta> = db.collection<IntCarpeta>(
    'Carpetas'
  );
  collections.carpetas = gamesCollection;
  console.log(
    `Successfully connected to database: ${ db.databaseName } and collection: ${ gamesCollection.collectionName }`
  );
  return gamesCollection;
}
