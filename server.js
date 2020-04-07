const express = require('express');
const app = express();

const config = require('./config');
const router = require('./network/routes') //Routes

router(app);

app.use('/', function(req, res){
    res.send('Hi :)');
});

app.listen(config.APP_PORT);
console.log(`Aplication running on ${config.APP_HOST}:${config.APP_PORT}`);