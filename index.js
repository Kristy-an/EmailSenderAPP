require('dotenv').config();
const dotenv=require('dotenv');

const express = require('express');
const passport = require('passport');
const mongoose =require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User.js');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();         // app object :a running express app

app.use(
  cookieSession({
    maxAge: 30 * 24 *60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT);

// localhost:3000m
