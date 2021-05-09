require("dotenv").config();
// other dependencies
const fs = require("fs");
const chalk = require("chalk");
const pg = require("pg");

// PG connection setup

var conString = process.env.POSTGRES_URL;
//Can be found in the Details page
var client = new pg.Client(conString);
// Loads the schema files from db/schema
const runSchemaFiles = function () {
	console.log(chalk.cyan(`-> Loading Schema Files ...`));
	const schemaFilenames = fs.readdirSync("./db/migrations");

	for (const fn of schemaFilenames) {
		const sql = fs.readFileSync(`./db/migrations/${fn}`, "utf8");
		console.log(`\t-> Running ${chalk.green(fn)}`);
		client.query(sql).catch((err) => {
			console.log(err);
		});
	}
};

const runSeedFiles = function () {
	console.log(chalk.cyan(`-> Loading Seeds ...`));
	const schemaFilenames = fs.readdirSync("./db/seeds");

	for (const fn of schemaFilenames) {
		const sql = fs.readFileSync(`./db/seeds/${fn}`, "utf8");
		console.log(`\t-> Running ${chalk.green(fn)}`);
		client.query(sql).catch((err) => {
			console.log(err);
		});
	}
};

try {
	console.log("Connecting to Database ...... ");
	client.connect(function (err) {
		if (err) {
			return console.error("could not connect to postgres", err);
		}
		runSchemaFiles();
		runSeedFiles();
	});
} catch (err) {
	console.error(chalk.red(`Failed due to error: ${err}`));
	client.end();
}
