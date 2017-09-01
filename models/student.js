const db = require('../lib/db');

function getStudents(req, res, next){
  db.any(`SELECT * from users WHERE (admin=false) OR (admin=null);`)
 .then((students) => {
      res.students = students;
      next();
    })
    .catch(error => next(error));
}

function getStudent(req, res, next){
  db.one('SELECT * from users WHERE email = $/email/;', req.params)
  .then((student) => {
    res.student = student;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getStudents,
  getStudent
}
