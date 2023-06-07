const ClientErrors = Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORISED:401,
    NOTfOUND:404
});

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMETED:501
});

const SuccessCodes = Object.freeze({
    OK:200,
    CREATED:201,

})

module.exports={
    ClientErrors,
    ServerErrors,
    SuccessCodes
}