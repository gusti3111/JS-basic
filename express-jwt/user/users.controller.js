const jwtTool = require('jsonwebtoken')
const userModel = require('./users.model')
require('dotenv').config
class userController {
  CreateUserController = async (req, res) => {
    const { userName, IdUser } = req.body;
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   return res
    //     .status(400)
    //     .json({ message: { [errors.array()[0].path]: errors.array()[0].msg } });
    // }

    // if regsitration successfull
    const userRegister = await userModel.createUserModel(userName, IdUser);
    if (userRegister === true) {
      return res.status(200).json({ message: "registered successfully" });
    }
    // user validator to check error in users controller
  };
  loginUserController = async (req, res) => {
    const { userName, IdUser } = req.body
    const userLogin = await userModel.loginUserModel(userName, IdUser)
    if (userLogin) {
      try {
        // sign in jwt token
        const createToken = jwtTool.sign(
          { ...userLogin, role: 'player' },
          process.env.SECRET_KEY

        )
        return res.json({ accessToken: "Bearer" + ' ' + createToken });
      } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: "token not created" });

      }

    } else {
      return res.status(401).json({ message: "failed to login " })
    }



  }
  getAllController = async(req,res) =>{
    try {
      const getall = await userModel.getAllModel()
      console.log(getall)
     return getall
      
    } catch (error) {
      return res.status(400).json({message: "" + error.message})
      
    }



  }


}
module.exports = new userController