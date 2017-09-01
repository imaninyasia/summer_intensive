const userRouter = require('express').Router()
const { createUser, login, createToken, verify, create_relation } = require('../models/user.js')

userRouter.route('/signup/:admin')
  .post(createUser, (req, res) => res.json(res.user || {message: 'user succesfully signed up'}));

userRouter.route('/login')
  .post( login, (req, res) => res.json(res.user || res.status));

userRouter.route('/user/:user')
  .post(create_relation, (req, res)=> res.json({message: "created user video relation table"}))

userRouter.route('/verify')
  .post(verify, (req, res)=> res.json(res.user || {message: 'user re-verified'}));
module.exports = userRouter;
