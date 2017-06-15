const db = require('../lib/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = 10;

function createUser(req, res, next) {
  console.log(req.body)
  db.none('INSERT INTO users (username, password) VALUES ($1, $2);',
    [req.body.username, bcrypt.hashSync(req.body.password, salt)])
    .then( () => {
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
}

function login(req, res, next) {
  console.log(req.body.password)
  db.one('SELECT * FROM users WHERE username = $/username/;', req.body)
    .then((data) => {
      console.log(data.password)
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ username: req.body.username, userID: data.user_id }, process.env.SECRET);
        res.status(200).json(myToken);
      } else {
        res.status(500).send('fuck u fite me irl');
      }
      next();
    })
  .catch(error => console.log(error))
}


module.exports = {
  createUser,
  login,
}
