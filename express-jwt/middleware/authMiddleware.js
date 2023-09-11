const jwt = require('jsonwebtoken')

require('dotenv').config

function Authorization(req,res,next) {
   
  
        try{
            const {authorization} = req.headers
            if (authorization === undefined) {
                return res.status(403).json({message:"Unauthorized"})
            }
          
            const accessToken = authorization.split(' ')[1]
            const token = jwt.verify(accessToken, process.env.SECRET_KEY)
            req.token = token
            next()
        }catch{
            return res.status(403).json({ message: error.message })
        }
    }
    
module.exports = Authorization
