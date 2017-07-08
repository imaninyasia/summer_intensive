const db = require('../lib/db');

function getAnswers(req, res, next){
  db.any('SELECT * from user_answers')
   .then((answers) => {
    console.log(answers)
      res.answers = answers;
      next();
    })
    .catch(error =>(
      console.log(error),
      next(error)));
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
}

module.exports = {
  getAnswers,
  getUsername,
}
