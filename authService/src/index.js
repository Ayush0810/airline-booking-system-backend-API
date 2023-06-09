const express  = require("express");
const {PORT} = require("./config/serverConfig");
const apiRoutes = require("./routes/index")
const app = express();
const db = require("./models/index")

const prepareAndStartServer=()=>{
    app.listen(PORT,()=>{
        app.use(express.json());
        app.use(express.urlencoded({extended:true}));

        app.use('/api' , apiRoutes)

        console.log(`auth server started at port: ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true})
        }
    })
}

prepareAndStartServer();