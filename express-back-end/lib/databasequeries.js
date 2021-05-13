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
			`SELECT name, img,pet_id  FROM my_pets  JOIN pet_shop ON pet_id = pet_shop.id where isActive = $1 and user_id =$2`,
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
			`SELECT * FROM pet_shop JOIN my_pets ON pet_id = pet_shop.id WHERE user_id = $1  `,
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
		.query(`SELECT * FROM pet_shop ORDER BY id `)
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
			`SELECT * FROM daily_challenges WHERE user_id = $1 AND completed = $2`,
			[1, false]
		)
		.then((result) => {
			// console.log('DAILY:', result)
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

const insertnewPet = function (id) {
	return db
		.query(
			`INSERT INTO my_pets (isActive, pet_id, user_id)
VALUES ($1, $2, $3) RETURNING *; `,
			[false, id, 1]
		)
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.insertnewPet = insertnewPet;

const insertnewTransaction = function insertnewTransaction(coins) {
	return db
		.query(
			`INSERT INTO coins (transaction,user_id) VALUES ($1,$2) RETURNING *`,
			[coins, 1]
		)
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.insertnewTransaction = insertnewTransaction;

const updateisActive = function (pet_id) {
	db.query(
		`UPDATE my_pets SET isActive = NOT isActive WHERE pet_id = $1 RETURNING * ;`,
		[pet_id]
	)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
		console.log(err);
	});
};
exports.updateisActive = updateisActive;

const updateDailyChallenges = function (formData) {
	return db.query(
		`UPDATE daily_challenges SET step_goal = $1, water_goal = $2, active_min_goal = $3 WHERE user_id = $4 RETURNING *;`, [formData.steps_goal, formData.water_goal, formData.active_min_goal, 1]
	)
	.then((result) => {
		return result.rows;
	})
	.catch((err) => {
		console.log(err);
	});
};

exports.updateDailyChallenges = updateDailyChallenges;



