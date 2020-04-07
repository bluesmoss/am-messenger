const store = require('./store');
const config = require('../../config');
const {socket} = require('../../socket');

const addMessage = (user, message, chat, file) => {

    return new Promise((resolve, reject) => {

        if (!user || !message || !chat) {
            console.log('No hay usuario o mensaje');
            reject('Datos incorrectos');
            return false;
        }

        let fileUrl = '';
        if (file) {
            fileUrl = `${config.APP_HOST}:${config.APP_PORT}${config.PUBLIC_ROUTE}${config.FILES_FOLDER}/${file.filename}`
        }

        const fullMessage = {
            user: user,
            chat: chat,
            message: message,
            date : new Date(),
            file: fileUrl
        }

        store.add(fullMessage);
        socket.io.emit('message', fullMessage);
        
        resolve(fullMessage);
    });    
}

const getMessages = (filterMessages) => {
    return new Promise ((resolve,reject) => {
        resolve(store.list(filterMessages));
    });
} 

const updateMessage = (id, message) => {
    return new Promise ( async (resolve,reject) => {
        console.log(id);
        console.log(message);
        if(!id || !message){
            reject('Invalid data');
            return false;
        }

        const result = await store.updateText(id, message);
        resolve(result);
    });
} 


const deleteMessage = (id) => {
    return new Promise ((resolve,reject) => {
        if(!id){
            reject('Id invalido');
            return false;
        }         
        store.remove(id)
            .then( () => {
                resolve();
            })
            .catch(e => {
                reject(e)
            })
    });
} 


module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}