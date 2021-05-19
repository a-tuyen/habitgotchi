//PG connection
const pg = require("pg");
const dbParams = require("./db.js");

// API helper function
const {
	getCaloriesValue,
	getstepsValue,
	getactivemin,
} = require("../Helpers/apihelper");
var db = new pg.Client(dbParams);
db.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});

//Function to query database for getting details about Active Pet
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

// Function which  queries the status data
const getdailyStatus = function () {
	const calorie = getCaloriesValue();
	// const step = getstepsValue();
	// const activemin = getactivemin();
	return {
		calories: calorie,
		sleep: 7,
		steps: 10027,
		water: 10,
		heart_rate: 73,
		active_min: 31,
	};
};
exports.getdailyStatus = getdailyStatus;

// Function which query database to load PetsHOP
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

// Function to get all data of Pet Shop.
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

//Function to get all daily Challenges
const getDailyChallenges = function () {
	return db
		.query(
			`SELECT * FROM daily_challenges WHERE user_id = $1 AND completed = $2`,
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

// Function which loads userChallenges
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

// Function to get the balanceCoins of all coins
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

//Function to Query to update the status the pet shop
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

// Function to Query to insert new purchased pet to my_pets table
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

// Function to insert new transactions into coins table
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

// Function to update the pet as Current Pet
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

// Function to get the value of all DailyChallenges
const updateDailyChallenges = function (formData) {
	return db
		.query(
			`UPDATE daily_challenges SET step_goal = $1, water_goal = $2, active_min_goal = $3 WHERE user_id = $4 RETURNING *;`,
			[formData.steps_goal, formData.water_goal, formData.active_min_goal, 1]
		)
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.updateDailyChallenges = updateDailyChallenges;

// Query to update the intensity of the workout intensity
const updateUserIntensity = function (data) {
	return db
		.query(`UPDATE users SET intensity = $1 WHERE id = $2;`, [`${data}`, 1])
		.then((result) => {
			return result.rows;
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.updateUserIntensity = updateUserIntensity;
