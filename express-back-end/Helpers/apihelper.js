var Caloriesvalue = 52;
let StepsValue = 7263;
let activeMinvalue = 12;

function getCaloriesValue() {
	setInterval(() => {
		Caloriesvalue = Caloriesvalue + 8;
		if (Caloriesvalue == 2000) {
			Caloriesvalue = 10;
		}
	}, 15000);

	return Caloriesvalue;
}

function getstepsValue() {
	setInterval(() => {
		StepsValue = StepsValue + 52;
		if (StepsValue == 10000) {
			StepsValue = 100;
		}
	}, 15000);
	return StepsValue;
}

function getactivemin() {
	setInterval(() => {
		activeMinvalue = activeMinvalue + 1;
		if (activeMinvalue == 92) {
			activeMinvalue = 92;
		}
	}, 15000);
	return activeMinvalue;
}
module.exports = { getstepsValue, getCaloriesValue, getactivemin };
