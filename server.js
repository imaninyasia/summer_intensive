'use strict'
require('dotenv').config({ silent: true});
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require ('path');
const jwt         = require('jsonwebtoken');
const expressJWT  = require('express-jwt')
const bcrypt      = require('bcryptjs');
const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'dist')));

// put routes here
app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next(); //if no token, continue

  token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Please register Log in using a valid email to submit posts'
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});
const userRouter = require('./routes/user.js');
const videoRouter = require('./routes/video.js');
const questionRouter = require('./routes/question.js');
app.use('/user', userRouter);


app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/', '/favicon.ico','/user/signup', 'user/login']}));

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {console.log('server running on port ', PORT)});
