const express = require('express'); //Servidor
const router = express.Router(); //Routes
const response = require('../../network/response');
const controller = require('./controller');


router.get('/', (req, res) => {
    const filterUser = req.query.name || null;
    controller.getUsers(filterUser)
    .then( userList => {
        response.success(req, res, userList, 200); 
    })
    .catch(e => {
        response.error(req, res, 'Unexpected error', 500, e);  
    });    
});


router.post('/', (req, res) => {
    controller.addUser(req.body.name, req.body.email)
    .then( data => {
        response.success(req, res, data, 201); 
    })
    .catch(e => {
        response.error(req, res, 'Invalid format', 400, e);  
    });

});



module.exports = router;