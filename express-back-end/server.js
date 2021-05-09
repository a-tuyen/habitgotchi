const Express = require("express");
require("dotenv").config();
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const fs = require("fs");
const chalk = require("chalk");
const pg = require("pg");

// PG connection setup
let result;
var conString = process.env.POSTGRES_URL;
//Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
const gettasksWithCategory = function () {
	return client
		.query(`SELECT name  FROM USERS where id = 1`)
		.then((res) => {
			return res.rows[0];
		})
		.catch((err) => {
			console.log(err);
		});
};

// Sample GET route
App.get("/api/data", (req, res) => {
	gettasksWithCategory().then((result) => {
		console.log(result);
		res.json({ message: result["name"] });
	});
});

App.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(
		`Express seems to be listening on port ${PORT} so that's pretty good 👍`
	);
});
