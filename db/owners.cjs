const client = require('./client.cjs');

const createOwner = async(name, username, password) => {
    try {
      await client.query(`
        INSERT INTO owners (name, username, password)
        VALUES ('${name}', '${username}', '${password}');
        `);  
    } catch (error) {
        console.log(err);
    }
}

module.exports = {
    createOwner
}