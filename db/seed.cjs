require('dotenv').config();
const client = require('./client.cjs');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS owners;
      `)
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE owners (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL
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

    await client.end();
   }
syncAndSeed();