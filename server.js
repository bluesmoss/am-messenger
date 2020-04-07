const express = require('express');
const app = express();

const config = require('./config');
const bodyParser = require('body-parser');
const router = require('./network/routes') //Routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.listen(config.APP_PORT);
console.log(`Aplication running on ${config.APP_HOST}:${config.APP_PORT}`);