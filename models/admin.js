const db = require('../lib/db');

function getAnswers(req, res, next){

  if (isNaN(req.params.student)==true){
    console.log('this is a student ')
    db.any("SELECT users.email, user_quiz.answer, answer_sheet.question_id, answer_sheet.question, answer_sheet.answer_long, answer_sheet.answer_short FROM users JOIN user_quiz on user_quiz.user_id = users.user_id JOIN answer_sheet on user_quiz.question_id = answer_sheet.question_id WHERE users.email=($1) and answer_sheet.video_id=($2) ORDER BY question_id ASC;", [req.params.student, req.params.video])
   .then((answers) => {
    console.log(answers, 'these are the answers')
      res.answers = answers;
      next();
    })
    .catch(error =>(
      console.log(error),
      next(error)));
  }else if (isNaN(req.params.student)==false){
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

    }
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

}
function postAssessment(req, res, next){
  console.log('posting assessment');
  console.log(req.body.assessment, req.body.url, req.params.user_id, 'check it')
  db.one('UPDATE users set assessments[($1)]=($2) WHERE user_id=($3) RETURNING assessments;',[req.body.assessment, req.body.url, req.params.user_id])
  .then((check)=> {
    console.log(check, 'check')
  })
.catch(error=> (console.log(error), next(error)));
}

module.exports = {
  getAnswers,
  getUsername,
  postAssessment,
}
