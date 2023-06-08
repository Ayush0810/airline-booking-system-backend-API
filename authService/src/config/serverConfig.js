const dotenv = require("dotenv");
const bcrypt = require("bcrypt")
dotenv.config({
    path:"../.env"
});

module.exports={
    PORT:process.env.PORT,
    SALT:bcrypt.genSaltSync(10),
    JWT_KEY:process.env.JWT
}