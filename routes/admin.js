const adminRouter = require('express').Router()
const { getQuestions, postQuestion} = require('../models/question.js')

adminRouter.route('/answers')
  .get(getAnswers, (req, res) => res.json(res.answers || []));

adminRouter.route('/username')
  .get(getUsername, (req, res) => res.json(res.username || {message: 'question submitted'}))
module.exports = adminRouter;
