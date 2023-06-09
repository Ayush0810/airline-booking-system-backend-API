const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index")
const setupAndStartServer = async () => {
const db = require("./models/index")
	const app = express();
	//middlewares
	app.use(express.json());
	app.use(express.urlencoded({extended:true}));

	app.use("/api" , apiRoutes);
	
	//setting up server
	app.listen(PORT, () => {
		console.log("Booking Server started at", PORT);
		if(process.env.SYNC_DB){
			db.sequelize.sync({alter: true});
		}
	});
};

setupAndStartServer();
