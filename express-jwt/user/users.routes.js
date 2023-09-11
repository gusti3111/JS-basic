const express = require('express')
const userRouter = express.Router()
const userController = require('./users.controller')
const authMiddleware = require('../middleware/authMiddleware')

userRouter.post('/register',userController.CreateUserController)

userRouter.post('/login',userController.loginUserController)
userRouter.get('/users',authMiddleware,userController.getAllController)

module.exports = userRouter