const db = require('../lib/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var utils = require('../utils/index.js');
const salt = 10;
const auth =  require('../src/Routes/Redux/actions.js')
const profile_image = "http://s3.amazonaws.com/appforest_uf/f1493773137867x425836683949455600/empty_profile.png"
function createUser(req, res, next) {
  let assessments = "{'null', 'null', 'null', 'null', 'null', 'null', 'null','null', 'null'}"
  let admin = req.params.admin
  if (admin == 'false'){
  db.one('INSERT INTO users (email, password, admin, profile_img, assessments) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
    [req.body.email, bcrypt.hashSync(req.body.password, salt), admin, profile_image, assessments])
    .then( (data) => {

      var token = utils.generateToken(data);
      res.user=data
      res.user['token'] = token
      res.user['password']=''
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
} else if (admin == 'true'){
  db.one('INSERT INTO users (email, password, admin, profile_img) VALUES ($1, $2, $3, $4) RETURNING *;',
    [req.body.email, bcrypt.hashSync(req.body.password, salt), admin, profile_image])
    .then( (data) => {
      var token = utils.generateToken(data);
      res.user=data
      res.user['token'] = token
      console.log('user(admin) created!')
      next();
    })
  .catch(error => console.log(error))
}

}

function create_relation(req, res, next){
  const watched = false
  let videos = []
  let user = req.params.user
  db.any('SELECT * FROM videos')
    .then((videos)=>{
    console.log('about to create video user relation')
       videos.map(
          function(video, index) {
            index +=1
            db.none('INSERT INTO video_relations (video_id, user_id, watched) VALUES ($1, $2, false)', [index, user])
                     })
    })

    db.any('SELECT * FROM courses')
    .then((courses)=>{
      console.log('about to create course relation')
      courses.map(
        function(course, index){
          index +=1
          db.none('INSERT INTO course_relation (user_id, course_id, progress) VALUES ($1, $2, false)', [user, index])

        })
    next();
    }).catch(error => console.log(error))

  db.any('SELECT * FROM parts')
  .then((parts)=>{
    console.log('about to create parts relation')
    parts.map(
      function(part, index){
        index +=1
        console.log(part.progress, 'part.progress')
        db.none('INSERT INTO part_relation(user_id, part_id, progress) VALUES ($1, $2, $3)', [user, index, part.progress])
      })
  })
}

function login(req, res, next) {
  db.one('SELECT * FROM users WHERE email=($1);', [req.body.email])

    .then((data) => {
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ admin: data.admin, assessments: data.assessments, email: data.email, final_grade: data.final_grade, userID: data.user_id }, process.env.SECRET);
        console.log(data, 'pigfeeeett')
        res.user = {
          token: myToken,
          admin: data.admin,
          assessments: data.assessments,
          email: data.email,
          final_grade: data.final_grade,
          profile_image: data.profile_image,
          user_id: data.user_id
        }
        console.log(res.user)
      } else {
        res.status(400).send({ error: "invalid password" });
        res.user=null
                console.log(res.user)

      }
      next();
    })
  .catch(error =>{console.log(error)
    res.status(500).send({ error: 'no email' })
  }

    )
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
      if (user.email == "admin.mail") {
        res.user = user;
        res.user['admin'] = true
        res.user['token'] = token
      }
      else{
        res.user = user;
        res.user['admin'] = false
        res.user['token'] = token
      }
       //set the user to req so other routes can use it
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
