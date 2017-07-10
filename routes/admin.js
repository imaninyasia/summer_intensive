const adminRouter = require('express').Router()
const { getAnswers, getUsername} = require('../models/admin.js')

adminRouter.route('/answers/:student')
  .get(getAnswers, (req, res) => res.json(res.answers || []));

adminRouter.route('/username/:student_id')
  .get(getUsername, (req, res) => res.json(res.username || []))
module.exports = adminRouter;
