const {User} = require('../db/models/')

class userModel{
   createUserModel = async(userName,IdUser) =>{
    try {
        await User.create({userName,IdUser})
        return true 

        
    } catch (error) {
        console.error(error)
        return error


        
    }


   } 
   loginUserModel = async(userName,IdUser) =>{
        try {
            await User.findOne({where:{userName,IdUser}})
            return true
            
        } catch (error) {
            console.error(error)
            return error
            
        }
   }
   getAllModel = async() =>{
    try{
        await User.findAll({})

    }catch{
        console.log(error)

    }

   }

}
module.exports = new userModel