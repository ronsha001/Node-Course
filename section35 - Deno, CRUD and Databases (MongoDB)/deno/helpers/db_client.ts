import { MongoClient, Database } from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri('mongodb+srv://NodeUdemy2:***********@nodeudemy2.4tr5c.mongodb.net/?retryWrites=true&w=majority');
  
  db = client.database('deno-todos');
}

export function getDb() {
  return db;
}