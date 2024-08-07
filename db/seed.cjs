require('dotenv').config();
const client = require('./client.cjs');
const { createOwner } = require('./owners.cjs');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS tours;
      DROP TABLE IF EXISTS owners;
      `);
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
    CREATE TABLE owners (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      username VARCHAR(30) NOT NULL UNIQUE,
      password VARCHAR(30) NOT NULL,
    );

    CREATE TABLE tours (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL UNIQUE,
      type VARCHAR(30) NOT NULL UNIQUE,
      rating INTEGER NOT NULL,
      owner_id INTEGER REFERENCES owners(id),
    );
      `);
  } catch(err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
    await client.connect();
    console.log('CONNECTED TO THE DB');

    await dropTables();
    console.log('TABLES DROPPED');

    await createTables();
    console.log('TABLES CREATED');

    await createOwner('brad');
    console.log('OWNERS CREATED');

    await client.end();
   }
syncAndSeed();