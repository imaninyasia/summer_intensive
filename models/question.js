const db = require('../lib/db');

function getQuestions(req, res, next){
  db.any('SELECT * FROM answer_sheet WHERE video_id =($1);', [req.params.video_id])
 .then((questions) => {
    console.log(questions)
    console.log(req.params.video_id)
      res.questions = questions;
      next();
    })
    .catch(error =>(
      console.log(error),
      next(error)));
}

function postQuestion(req, res, next){
  db.none("INSERT into user_quiz (user_id, answer, question_id) VALUES((SELECT user_id from users where username=($1)), ($2), ($3));",
    [req.params.username, req.params.user_answer, req.params.question_id ])
    .then( () => {
      console.log('question posted')
      next()
    })
  .catch(error =>(
    console.log('Error posting question'),
    console.log(error)))
}

module.exports = {
  getQuestions,
  postQuestion,
}
