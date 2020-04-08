const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes'); //Routes
const socket = require('./socket');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// DB Connection
db(config.DB_URL); 

//Socket connection
socket.connect(server);

router(app);

//Public 
app.use(config.PUBLIC_ROUTE, express.static('public'));
server.listen(config.APP_PORT, () => {
    console.log(`Aplication running on ${config.APP_HOST}:${config.APP_PORT}`);
}); 