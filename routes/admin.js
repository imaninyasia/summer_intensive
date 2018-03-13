const adminRouter = require('express').Router()
const { getAnswers, getUsername, postAssessment} = require('../models/admin.js')

adminRouter.route('/answers/:student/:video')
  .get(getAnswers, (req, res) => res.json(res.answers || []));

adminRouter.route('/username/:student_id')
  .get(getUsername, (req, res) => res.json(res.username || []))

adminRouter.route('/assessment/:user_id')
  .post(postAssessment, (req, res)=> res.json({message: "posted user assesment"}));

module.exports = adminRouter;
