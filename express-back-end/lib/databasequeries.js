//PG connection
const pg = require("pg");
const dbParams = require("./db.js");

var db = new pg.Client(dbParams);
db.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});
const getActivePet = function () {
	return db
		.query(
			`SELECT name, img  FROM my_pets  JOIN pet_shop ON pet_id = pet_shop.id where isActive = $1 and user_id =$2`,
			[true, 1]
		)
		.then((res) => {
			return res.rows[0];
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getActivePet = getActivePet;

const getdailyStatus = function () {
	return db
		.query(
			`SELECT calories, sleep, steps, water FROM user_data_readings where user_id =$1 and created_date = $2`,
			[1, "2021-05-15"]
		)
		.then((result) => {
			return result.rows[0];
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getdailyStatus = getdailyStatus;

const getPetInventory = function () {
	return db
		.query(
			`SELECT * FROM pet_shop JOIN my_pets ON pet_id = pet_shop.id WHERE user_id = $1`,
			[1]
		)
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getPetInventory = getPetInventory;

const getAllfrompetShop = function () {
	return db
		.query(`SELECT * FROM pet_shop `)
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getAllfrompetShop = getAllfrompetShop;

const getDailyChallenges = function () {
	return db
		.query(
			`SELECT step_goal, water_goal, active_min_goal FROM daily_challenges WHERE user_id = $1 AND completed = $2`,
			[1, false]
		)
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getDailyChallenges = getDailyChallenges;

const getUserChallenges = function () {
	return db
		.query(
			`SELECT * FROM challenges JOIN user_challenges ON challenge_id = challenges.id WHERE user_id = $1 AND completed = $2`,
			[1, false]
		)
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getUserChallenges = getUserChallenges;

const getbalanceCoins = function () {
	return db
		.query(`SELECT SUM(transaction) FROM COINS WHERE user_id = $1`, [1])
		.then((result) => {
			return result.rows[0];
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getbalanceCoins = getbalanceCoins;

const updatePetShop = function (id) {
	return db
		.query(`UPDATE pet_shop SET purchased = true WHERE id = $1 RETURNING *;`, [
			id,
		])
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.updatePetShop = updatePetShop;
