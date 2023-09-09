const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const port = process.env.PORT 

app.get('/', (req, res) =>{

    res.send('Welcome to the goolest')
})

// register
app.post('/register', (req, res) =>{
    
})

app.listen(port,() =>{
    console.log('listening on port at', port)
})