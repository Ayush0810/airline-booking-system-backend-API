const nodeMailer = require("nodemailer");
const {EMAIL_PASS,EMAIL_ID} = require("./serverConfig")
const sender = nodeMailer.createTransport({
    service:'Gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    }
})

module.exports = sender;