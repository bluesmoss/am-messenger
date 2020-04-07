const Model = require('./model');

const addMessage = message => {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();

}

const getMessage =  (filterMessages) => {
    //return list;

    return new Promise((resolve, reject) =>{
        let filter = {};
        if(filterMessages !== null) {
            filter = {
                  chat : filterMessages
            };
        }
        
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error)
                    return false;
                }
                resolve(populated);
            }); 
        
    })
}

const updateText = async (id, message) => {
    //return list;
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage =  await foundMessage.save();
    return newMessage;
}


const removeMessage = async (id) => {
    return Model.deleteOne({
        _id : id
    })
}


module.exports = {
    add: addMessage,
    list: getMessage,
    updateText : updateText,
    remove : removeMessage
    // get
    // update
    // delete
}