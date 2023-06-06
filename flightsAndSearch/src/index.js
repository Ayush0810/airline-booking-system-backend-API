const express = require("express");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index')
const db = require('./models/index')

const setupAndStartServer = async () => {

	const app = express();
	//middlewares
	app.use(express.json());
	app.use(express.urlencoded({extended:true}));

	//Routes
	app.use('/api' , ApiRoutes)

	//setting up server
	app.listen(PORT, () => {
		console.log("Server started at", PORT);
		if(process.env.SYNC_DB){
			db.sequelize.sync({alter: true});
		}
	});
};

setupAndStartServer();
