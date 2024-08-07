require('dotenv').config();
const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(`<h1>SOLOng Tours</h1>`);
});

app.get('/users', (req, res, next) => {
    res.send([
        {
          id: 1,
		      username: "YOLO",
					password: "YOLO1",
      
        },

				{
          id: 2,
					username: "FOMO",
					password: "FOMO1",
          
        },

				{
          id: 3,
					username: "GOPRO",
					password: "GOPRO1",
         
        },
				
				{
          id: 4,
					username: "METRO",
					password: "METRO1",
          
        },

    ])
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});


export default Server;