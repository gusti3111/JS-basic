const express = require('express')
const app = express()
const userRouter = require('./user/users.routes')
require('dotenv').config()
const PORT = process.env.PORT



app.use(express.json())

app.get('/', (req, res) => {
    res.send('ola miamor!!!')
})

app.use('/',userRouter)





app.listen(PORT,()=>{
    console.log('app listen port 8000')
})
module.exports = app