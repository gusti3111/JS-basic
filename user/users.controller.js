
const userModel = require('./users.model')
class userController{
    CreateUserController = async (req, res) => {
        const { userName,IdUser } = req.body;
        // const errors = validationResult(req);
    
        // if (!errors.isEmpty()) {
        //   return res
        //     .status(400)
        //     .json({ message: { [errors.array()[0].path]: errors.array()[0].msg } });
        // }
    
        // if regsitration successfull
        const userRegister = await userModel.createUserModel(userName,IdUser);
        if (userRegister === true) {
          return res.status(200).json({ message: "registered successfully" });
        }
        // user validator to check error in users controller
      };
      
    
}
module.exports = new userController