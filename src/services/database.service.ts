//* External Dependencies

import { Collection, Db, MongoClient } from 'mongodb';

//* Global Variables

export const collections: { games?: Collection } = {};

//* Initialize Connection

export async function connectToDatabase () {
  const client: MongoClient = new MongoClient(
    'mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority'
  );

  await client.connect();

  const db: Db = client.db(
    'RyS'
  );

  const gamesCollection: Collection = db.collection(
    'Pruebas'
  );
  return gamesCollection;

}

connectToDatabase()
  .then(
    (
      cc
    ) =>
    {
      console.log(cc.find().toArray());
      return cc.find()
        .toArray();
    }
  );