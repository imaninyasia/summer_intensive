const adminRouter = require('express').Router()
const { getAnswers, getUsername} = require('../models/admin.js')

adminRouter.route('/answers')
  .get(getAnswers, (req, res) => res.json(res.answers || []));

adminRouter.route('/username')
  .get(getUsername, (req, res) => res.json(res.username || []))
module.exports = adminRouter;
