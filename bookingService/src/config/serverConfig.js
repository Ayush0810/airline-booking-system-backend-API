const dotenv = require("dotenv");
dotenv.config({
    path:"../.env"
});

module.exports={
    PORT:process.env.PORT,
    FLIGHT_SERVICE_PATH:process.env.FLIGHT_SERVICE_PATH,
    
}