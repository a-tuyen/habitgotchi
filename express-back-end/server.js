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

// GET Route for digitalPet
App.get("/api/digitalpet", (req, res) => {
	db.getActivePet().then((result) => {
		res.json({ message: result });
	});
});

// Route for Status data
App.get("/api/statdata", (req, res) => {
	const result = db.getdailyStatus();
	res.json({ result });
});

//Route for getting myPet
App.get("/api/mypetinventory", (req, res) => {
	db.getPetInventory().then((result) => {
		res.json({ message: result });
	});
});

// Route for the Pet Shop data
App.get("/api/petshop", (req, res) => {
	db.getAllfrompetShop().then((result) => {
		res.json({ message: result });
	});
});

// Route for getting balanceCoins
App.get("/api/balancecoins", (req, res) => {
	db.getbalanceCoins().then((result) => {
		res.json({ message: result });
	});
});

// Route for updating Shop and my Pets on buying new Pet
App.put("/api/updateShop", (req, res) => {
	db.updatePetShop(req.body.id)
		.then(() => {
			return db.insertnewPet(req.body.id);
		})
		.then(() => {
			return db.insertnewTransaction(-req.body.itemcoins);
		})
		.then((result) => {
			res.json({ message: "Success" });
		});
});

// Function Changes the status of current pet to inactive and viceversa
App.put("/api/digitalpet1", (req, res) => {
	const promiseUpdateCurrentPet = db.updateisActive(req.body.CurrentPet_id);
	const promiseUpdateNewPet = db.updateisActive(req.body.id);
	Promise.all([promiseUpdateCurrentPet, promiseUpdateNewPet]).then((all) => {
		return res.json({ message: "Success" });
	});
});

// Route for getting dailyChallenges value
App.get("/api/dailychallenges", (req, res) => {
	db.getDailyChallenges().then((result) => {
		res.json({ message: result });
	});
});

// Route for userChallenges
App.get("/api/userchallenges", (req, res) => {
	db.getUserChallenges().then((result) => {
		res.json({ message: result });
	});
});

// Route for handling the new change in dailyChallenges form

App.put("/api/dailychallenges", (req, res) => {
	db.updateDailyChallenges(req.body.formData)
		.then((result) => {
			return db.updateUserIntensity(req.body.formData.intensity);
		})
		.then((result) => {
			res.json({ message: "Success" });
		});
});

// Route for updating Coins
App.put("/api/updateCoins", (req, res) => {
	db.insertnewTransaction(req.body.coins).then((result) => {
		res.json({ message: "Success" });
	});
});

App.listen(PORT, () => {
	console.log(
		`Express seems to be listening on port ${PORT} so that's pretty good 👍`
	);
});
