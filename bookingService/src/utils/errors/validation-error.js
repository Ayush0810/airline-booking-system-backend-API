const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error{
    constructor(error){
        let explanation = [];
        error.errors.forEach((err)=>{
            explanation.push(err.message)
        })
        super()
        this.name = 'Validation Error';
        this.message = 'not able to validate the data sent in the request';
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST
        
    }
}

module.exports = ValidationError;