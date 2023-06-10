const dotenv = require("dotenv");
dotenv.config({
    path:"../.env"
});

module.exports={
    PORT:process.env.PORT,
    EMAIL_ID:process.env.EMAIL_ID,
    EMAIL_PASS:process.env.EMAIL_PASS,
    
}