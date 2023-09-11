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
       const getall = await User.findAll()
       console.log(getall)
       return getall

    }catch(error){
        return error
        
     

    }

   }

}
module.exports = new userModel