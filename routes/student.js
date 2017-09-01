const studentRouter = require('express').Router()
const { getStudents, getStudent} = require('../models/student.js')

studentRouter.route('/')
  .get(getStudents, (req, res) => res.json(res.students || []));

studentRouter.route('/:email')
.get(getStudent, (req, res) => res.json(res.student || []));

module.exports = studentRouter;
