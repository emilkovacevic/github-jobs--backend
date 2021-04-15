const express = require('express')
const axios = require('axios');
var cors = require('cors')
const app = express()
const port = 5000


app.use(cors())

// header
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
  });
  
app.get("/", (req, res) => res.send('server running'))

app.get("/jobs", (req, res) => {
    axios.get('https://jobs.github.com/positions.json')
	.then(response => res.send(response.data))
	.catch(err => console.log(err))
})

app.listen( process.env.PORT || port, ()=> console.log('exampe listen port on ' + port))
