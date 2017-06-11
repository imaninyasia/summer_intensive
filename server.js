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

app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/']}));

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {console.log('server running on port ', PORT)});
