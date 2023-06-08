const express  = require("express");
const {PORT} = require("./config/serverConfig");
const apiRoutes = require("./routes/index")
const app = express();

const prepareAndStartServer=()=>{
    app.listen(PORT,()=>{
        app.use(express.json());
        app.use(express.urlencoded({extended:true}));

        app.use('/api' , apiRoutes)
        console.log(`auth server started at port: ${PORT}`)
    })
}

prepareAndStartServer();