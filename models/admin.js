const db = require('../lib/db');

function getAnswers(req, res, next){
  console.log(req.params.student, 'student id')
  db.any("SELECT users.email, user_quiz.answer, answer_sheet.question_id, answer_sheet.question, answer_sheet.answer_long, answer_sheet.answer_short FROM users JOIN user_quiz on user_quiz.user_id = users.user_id JOIN answer_sheet on user_quiz.question_id = answer_sheet.question_id WHERE users.user_id=($1) ORDER BY question_id ASC;", [req.params.student])
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
  db.one('select email from users where email=($1);', [req.body])
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
