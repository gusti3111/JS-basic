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
   getAllModel = async() => {
    try {
       const users = await User.findAll({});
       console.log(users)
       return users;
    } catch (error) {
       throw error;
    }
 }
 

}
module.exports = new userModel