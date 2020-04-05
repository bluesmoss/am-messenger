const express = require('express');

var app = express();

app.use('/', function(req, res){
    res.send('Hi :)');
});

app.listen(8000);
console.log('App running on http://localhost:8000');