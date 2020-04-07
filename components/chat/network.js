const express = require('express'); //Server
const router = express.Router(); //Routes
const response = require('../../network/response');
const controller = require('./controller');


router.post('/', (req, res) => {
    controller.addChat(req.body.users)
    .then( data => {
        response.success(req, res, data, 200); 
    })
    .catch(e => {
        response.error(req, res, 'Unexpected error', 500, e);  
    });    
});


router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId)
    .then( data => {
        response.success(req, res, data, 200); 
    })
    .catch(e => {
        response.error(req, res, 'Unexpected error', 500, e);  
    });

});



module.exports = router;