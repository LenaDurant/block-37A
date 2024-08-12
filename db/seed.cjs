require('dotenv').config();
const client = require('./client.cjs');
const { createOwner } = require('./owners.cjs');
const { createTours } = require('./tours.cjs');

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
      password VARCHAR(30) NOT NULL
    );

    CREATE TABLE tours (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL UNIQUE,
      type VARCHAR(30) NOT NULL UNIQUE,
      rating INTEGER NOT NULL,
      owner_id INTEGER REFERENCES owners(id)
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

    await createOwner('bethany ann', 'yolo', 'yolo1');
    console.log('bethany OWNERS CREATED');

    await createOwner('brad', 'fomo', 'fomo1');
    console.log('brad OWNER CREATED');

    await createOwner('biff', 'gopro', 'gopro1');
    console.log('biff OWNERS CREATED');

    await createOwner('brett', 'metro', 'metro1');
    console.log('brett OWNERS CREATED');

    await createTours('ice ice baby', 'adventurous', 0, 1);
    console.log('ice TOURS CREATED');

    await createTours('chasing waterfalls', 'highly adventurous', 0, 2);
    console.log('chasing TOURS CREATED');

    await createTours('hobbit along', 'leisure', 0, 3);
    console.log('hobbit TOURS CREATED');

    await createTours('lion queen', 'fairly adventurous', 0, 4);
    console.log('lion TOURS CREATED');



    await client.end();
   }
syncAndSeed();