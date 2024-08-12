const client = require('./client.cjs');

const createTours = async(name, type, rating, owner_id) => {
    try {
      await client.query(`
        INSERT INTO tours (name, type, rating, owner_id)
        VALUES ('${name}', '${type}', '${rating}', '${owner_id}');
        `);  
    } catch (error) {
        console.log(err);
    }
}

module.exports = {
    createTours
}