const studentRouter = require('express').Router()
const { getStudents, getStudent, getEmail} = require('../models/student.js')

studentRouter.route('/')
  .get(getStudents, (req, res) => res.json(res.students || []));

studentRouter.route('/admin/:user_id')
.get(getEmail, (req, res)=> res.json(res.email || []));

studentRouter.route('/:email')
.get(getStudent, (req, res) => res.json(res.student || []));



module.exports = studentRouter;
