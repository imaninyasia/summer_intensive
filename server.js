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
const webpack     = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js')
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'dist')));
const compiler = webpack(webpackConfig)
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))
app.use(webpackHotMiddleware(compiler))
// put routes here

const userRouter = require('./routes/user.js');
const studentRouter = require('./routes/student.js')
const videoRouter = require('./routes/video.js');
const questionRouter = require('./routes/question.js');
const adminRouter = require('./routes/admin.js')
const badgesRouter = require('./routes/badges.js')
app.use('/user', userRouter);
app.use('/student', studentRouter )
app.use('/videos', videoRouter )
app.use('/questions', questionRouter)
app.use('/admin', adminRouter)
app.use('/badges', badgesRouter)
app.use(function(req, res, next) {
  // check header or url parameters or post parameters for token

  var token = req.body.token;
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



app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {console.log('server running on port ', PORT)});
