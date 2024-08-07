const client = require('./client.cjs');

const createOwner = async(name) => {
    try {
      await client.query(`
        INSERT INTO owners (name)
        VALUES ('${name}');
        `);  
    } catch (error) {
        console.log(err);
    }
}

module.exports = {
    createOwner
}