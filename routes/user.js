const userRouter = require('express').Router()
const { createUser, login, createToken } = require('../models/user.js')

userRouter.route('/signup')
  .post(createUser, (req, res) => res.json({message: 'user succesfully signed up'}));

userRouter.route('/login')
  .post( login, (req, res) => res.json({message: 'user succesfully logged in'}));


module.exports = userRouter;
