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
App.get("/api/data", (req, res) => {
	db.gettasksWithCategory().then((result) => {
		console.log(result["img"]);
		res.json({ message: result["img"] });
	});
});

App.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(
		`Express seems to be listening on port ${PORT} so that's pretty good 👍`
	);
});
