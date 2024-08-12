require('dotenv').config();
const client = require('./db/client.cjs');
const express = require ('express');
const app = express();

app.use(express.json());

app.get ('/', async(req, res, next) => {
  await client.connect();
  let results = await client.query(`SELECT * FROM tours`);

    res.send(results.rows);
      
});

app.get('/users', (req, res, next) => {
    res.send([
        {
          id: 1,
          name: "bethany ann",
		      username: "yolo",
					password: "yolo1",
      
        },

				{
          id: 2,
          name: "brad",
					username: "fomo",
					password: "fomo1",
          
        },

				{
          id: 3,
          name: "biff",
					username: "gopro",
					password: "gopro1",
         
        },
				
				{
          id: 4,
          name: "brett",
					username: "metro",
					password: "metro1",
          
        },

    ])
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});


// export default Server;