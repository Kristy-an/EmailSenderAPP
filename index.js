require('dotenv').config();
const dotenv=require('dotenv');
const express = require('express');
require('./services/passport');

const app = express();         // app object :a running express app

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT);

// localhost:3000m
