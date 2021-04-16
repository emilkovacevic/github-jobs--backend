const express = require('express')
const axios = require('axios');
const app = express()
const port = 5000



// header

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
  });
  


app.get("/", (req, res) => {
    axios.get('https://jobs.github.com/positions.json')
	.then(response => res.send(response.data))
	.catch(err => console.log(err))
})

app.listen( process.env.PORT || port)
