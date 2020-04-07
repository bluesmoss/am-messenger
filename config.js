require('dotenv').config();

const config = {
    APP_PORT : process.env.APP_PORT || 3000,
    APP_HOST: process.env.APP_HOST || 'http://127.0.0.1',
    DB_URL : `${process.env.DB_TYPE_CONEXION}${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}`,
    DB_NAME : process.env.DB_NAME || 'messenger',
    PUBLIC_ROUTE: process.env.PUBLIC_ROUTE || '/app',
    FILES_FOLDER: process.env.FILES_FOLDER || '/files'
}


module.exports = config;