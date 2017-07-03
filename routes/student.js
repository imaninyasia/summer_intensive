const studentRouter = require('express').Router()
const { getStudents} = require('../models/student.js')

studentRouter.route('/')
  .get(getStudents, (req, res) => res.json(res.students || []));

module.exports = studentRouter;
