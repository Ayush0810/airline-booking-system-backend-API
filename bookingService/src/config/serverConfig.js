const dotenv = require("dotenv");
dotenv.config({
    path:"../.env"
});

module.exports={
    PORT:process.env.PORT,
}