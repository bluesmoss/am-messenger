const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal Error'
}

exports.success = (req, res, message, status) => {

    let statusCode = (status) ? status : 200;
    let statusMessage = (message) ? message : statusMessages[status];

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = (req, res, error, status, details) => {
    console.log(`[response error] ${details}`);

    let errorCode = (status) ? status : 500;
    let errorMessage = (error) ? error : statusMessages[status];    

    res.status(errorCode).send({
        error: errorMessage,
        body: ''
    });
}