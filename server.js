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

const userRouter = require('./routes/user.js');
const studentRouter = require('./routes/student.js')
const videoRouter = require('./routes/video.js');
const questionRouter = require('./routes/question.js');
const adminRouter = require('./routes/admin.js')
app.use('/user', userRouter);
app.use('/student', studentRouter )
app.use('/videos', videoRouter )
app.use('/questions', questionRouter)
app.use('/admin', adminRouter)
// app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/', '/favicon.ico','/user/signup', 'user/login', '/user/verify', '/videos/', '/student/','/questions', '/dashboard','/courses/3', '/videos/ind/3']}));




app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {console.log('server running on port ', PORT)});
