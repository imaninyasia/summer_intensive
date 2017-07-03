const db = require('../lib/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = 10;
const profile_image = "http://s3.amazonaws.com/appforest_uf/f1493773137867x425836683949455600/empty_profile.png"
function createUser(req, res, next) {
  let admin = req.params.admin
  if (admin == 'false'){
  db.one('INSERT INTO users (username, password, admin, profile_img) VALUES ($1, $2, $3, $4) RETURNING *;',
    [req.body.username, bcrypt.hashSync(req.body.password, salt), admin, profile_image])
    .then( (data) => {
      console.log(data, 'signup data')
      res.user = data
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
} else if (admin == 'true'){
  db.none('INSERT INTO users (username, password, admin, profile_img) VALUES ($1, $2, $3, $4);',
    [req.body.username, bcrypt.hashSync(req.body.password, salt), admin, profile_image])
    .then( () => {
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
}

}

function create_relation(req, res, next){
  const watched = false
  let videos = []
  let user = req.params.user
  db.any('SELECT * FROM videos')
    .then((data)=>{
    console.log('about to create video user relation')
      videos = data
       videos.map(
          function(video, index) {
            index +=1
            db.none('INSERT INTO video_relations (video_id, user_id, watched) VALUES ($1, $2, false)', [index, user])
                     })
    })

  // db.none('INSERT INTO video_relations (video_id, user_id, watched) VALUES ($1, $2, false)', [req.params.vid, req.params.user])
}

function login(req, res, next) {

  db.one('SELECT * FROM users WHERE username = $/username/;', req.body)

    .then((data) => {

      const match = bcrypt.compareSync(req.body.password, data.password);
      console.log(match)
      if (match) {

        const myToken = jwt.sign({ username: req.body.username, userID: data.user_id }, process.env.SECRET);

        res.user = data
        res.user['token'] = myToken
      } else {
        res.status(500).send('fuck u fite me irl');
      }
      console.log('logged in')
      console.log(req.body.username)
      console.log(data)


      next();


    })
  .catch(error => console.log(error))
}

function verify(req, res, next) {
  // check header or url parameters or post parameters for token//if no token, continue
  var token = req.body.token
  if (!token) return next();
  token = token.replace('Bearer ', '');
  jwt.verify(token, process.env.SECRET, function(err, user) {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Please register Log in using a valid email to submit posts'
      });
    } else {
      console.log("user", user)
      if (user.username == "admin") {
        res.user = user;
        res.user['admin'] = true
      }
      else{
        res.user = user;
        res.user['admin'] = false
      }
       //set the user to req so other routes can use it
      console.log("res.user" , res.user)
      next();
    }
  });
}

module.exports = {
  createUser,
  login,
  verify,
  create_relation,
}
