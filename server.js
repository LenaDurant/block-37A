require('dotenv').config();
const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send([
      {
        id: 1,
        name: "ice ice baby",
        type: "adventurous",
        rating: 4.6
      },

      {
        id: 2,
        name: "chasing waterfalls",
        type: "highly adventurous",
        rating: 4.9
      },

      {
        id: 3,
        name: "hobbit along",
        type: "leisure",
        rating: 4.7
      },

      {
        id: 4,
        name: "lion queen",
        type: "fairly adventurous",
        rating: 4.8
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