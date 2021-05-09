//PG connection
const pg = require("pg");
const dbParams = require("./db.js");

var db = new pg.Client(dbParams);
db.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});
const gettasksWithCategory = function () {
	return db
		.query(`SELECT img  FROM pet_shop where id = 1`)
		.then((res) => {
			console.log(res.rows[0]);
			return res.rows[0];
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.gettasksWithCategory = gettasksWithCategory;
