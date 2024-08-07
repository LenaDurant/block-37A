require('dotenv').config();
const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send([
      {
        id: 1,
        type: "ice ice baby"
      },

      {
        id: 2,
        type: "chasing waterfalls"
      },

      {
        id: 3,
        type: "hobbit along"
      },

      {
        id: 4,
        type: "lion queen"
      },
    ])
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


export default Server;