const express = require('express'); //Server
const router = express.Router(); //Routes
const multer = require('multer');
const path = require('path');
const config = require('../../config');
const response = require('../../network/response');
const controller = require('./controller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `public${config.FILES_FOLDER}/`)
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  
const upload = multer({ storage: storage });

router.get('/', function (req, res){
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then( messageList => {
            response.success(req, res, messageList, 200); 
        })
        .catch(error => {
            response.error(req, res, 'Unexpected error', 500, error);  
        });    
});

router.post('/', upload.single('file'), function (req, res){
    controller.addMessage(req.body.user, req.body.message, req.body.chat, req.file)
        .then( fullMessage => {
            response.success(req, res, fullMessage, 201); 
        })
        .catch(error => {
            response.error(req, res, 'Invalid format', 400, error);  
        });

});

router.patch('/:id', function(req, res){

    controller.updateMessage(req.params.id, req.body.message)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, 'Unexpected error', 500, error);
        })
})


router.delete('/:id', function (req, res){

    controller.deleteMessage(req.params.id)
        .then( () => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch( e => {
            response.error(req, res, 'Unexpected error', 500, e)    
        })

   
});

module.exports = router;