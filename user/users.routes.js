const express = require('express')
const userRouter = express.Router()
const userController = require('./users.controller')

userRouter.post('/register',userController.CreateUserController)

userRouter.post('/login',userController.loginUserController)

module.exports = userRouter