const Express = require("express");
require("dotenv").config();
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const fs = require("fs");
const db = require("./lib/databasequeries.js");
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/digitalpet", (req, res) => {
	db.getActivePet().then((result) => {
		res.json({ message: result });
	});
});
App.get("/api/statdata", (req, res) => {
	db.getdailyStatus().then((result) => {
		res.json({ message: result });
	});
});
App.get("/api/mypetinventory", (req, res) => {
	db.getPetInventory().then((result) => {
		res.json({ message: result });
	});
});

App.get("/api/petshop", (req, res) => {
	db.getAllfrompetShop().then((result) => {
		res.json({ message: result });
	});
});
App.get("/api/balancecoins", (req, res) => {
	db.getbalanceCoins().then((result) => {
		res.json({ message: result });
	});
});

App.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(
		`Express seems to be listening on port ${PORT} so that's pretty good 👍`
	);
});
