const express = require("express");
const {PORT} = require("./config/serverConfig")
const TicketController = require("./controllers/ticket-controller");
const setupJobs = require("./utils/job");
const { createChannel } = require("./utils/messageQueue");
const setUpAndStartServer = async ()=>{
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({extended:true}));
    // const channel = await createChannel();

    app.post('/api/v1/tickets' , TicketController.create)

    app.listen(PORT,()=>{
        console.log("reminder service listening at port" ,PORT)
        setupJobs();
    })
}

setUpAndStartServer();