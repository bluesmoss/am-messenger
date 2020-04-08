const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    }, 
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    }, 
    message: {
        type: String, 
        required: true
    },
    date: Date,
    file: String
})


const model = mongoose.model('Messsage', mySchema);
module.exports= model;