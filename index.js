const express = require('express');
const app = express();  // app object :a running express app

app.get('/',(req, res) => {
  res.send({hi:'there' });
})

app.listen(3000);
