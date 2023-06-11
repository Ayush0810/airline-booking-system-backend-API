const express = require("express");
const {PORT} = require("./config/serverConfig")
const TicketController = require("./controllers/ticket-controller")
const setUpAndStartServer = ()=>{
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({extended:true}));


    app.post('/api/v1/tickets' , TicketController.create)

    app.listen(PORT,()=>{
        console.log("reminder service listening at port" ,PORT)
    })
}

setUpAndStartServer();