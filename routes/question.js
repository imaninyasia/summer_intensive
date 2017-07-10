const questionRouter = require('express').Router()
const { getQuestions, postQuestion} = require('../models/question.js')

questionRouter.route('/:video_id')
  .get(getQuestions, (req, res) => res.json(res.questions || []));

questionRouter.route('/post_q/:question_id/:username/:user_answer')
  .post(postQuestion, (req, res) => res.json({message: 'question submitted'}))
module.exports = questionRouter;
