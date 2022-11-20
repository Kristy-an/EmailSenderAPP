const express = require('express');
const app = express();         // app object :a running express app

app.get('/',(req, res) => {    //request, response
  res.send({hi: 'there' });
})

const PORT = process.env.PORT || 5000;
const host = '0.0.0.0';
app.listen(PORT,host);

// localhost:3000
