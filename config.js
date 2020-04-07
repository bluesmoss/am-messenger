require('dotenv').config();

const config = {
    APP_PORT : process.env.APP_PORT || 3000,
    APP_HOST: process.env.APP_HOST || 'http://127.0.0.1',
}


module.exports = config;