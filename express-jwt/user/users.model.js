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

}
module.exports = new userModel