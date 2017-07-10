const db = require('../lib/db');

function getAnswers(req, res, next){
  console.log(req.params.student, 'student id')
  db.any("SELECT DISTINCT users.username, user_quiz.answer, answer_sheet.question_id, answer_sheet.question, answer_sheet.answer_long, answer_sheet.answer_short FROM users, user_quiz JOIN answer_sheet on user_quiz.question_id = answer_sheet.question_id WHERE users.user_id=($1);", [req.params.student])
   .then((answers) => {
    console.log(answers, 'these are the answers')
      res.answers = answers;
      next();
    })
    .catch(error =>(
      console.log(error),
      next(error)));
    // "admin/answers"
}

function getUsername(req, res, next){
  db.one('select username from users where username=($1)', [req.body])
  .then((username) => {
    console.log(username)
      res.username = username;
      next();
    })
    .catch(error =>(
      console.log(error),
      next(error)));
    // "admin/username"
}

module.exports = {
  getAnswers,
  getUsername,
}
