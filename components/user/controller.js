const store = require('./store');

const addUser = (name, email) => {

    if (!name || !email) {
        return Promise.reject('Invalid user');
    }

    const addUser = {
        name: name,
        email: email,
        date : new Date()
    }

    return store.add(addUser);
    
}

const getUsers = (filterUser) => {
    return new Promise ((resolve,reject) => {
        resolve(store.list(filterUser));
    });
} 


module.exports = {
    addUser,
    getUsers,
}