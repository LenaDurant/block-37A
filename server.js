const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(`<h1>SOLOng Tours</h1>`);
});

app.get('/employees', (req, res, next) => {
    res.send([
        {
          id: 1,
		      username: "YOLO",
					password: "YOLO1",
          review:,
        },

				{
          id: 2,
					username: "FOMO",
					password: "FOMO1",
          review:,
        },

				{
          id: 3,
					username: "GOPRO",
					password: "GOPRO1",
          review:,
        },
				
				{
          id: 4,
					username: "METRO",
					password: "METRO1",
          review:,
        },

    ])
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});


export default Server;