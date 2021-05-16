var Caloriesvalue = 52;
let StepsValue = 7263;
let activeMinvalue = 12;

function getCaloriesValue() {
	setInterval(() => {
		Caloriesvalue = Caloriesvalue + 100;
		if (Caloriesvalue == 2000) {
			Caloriesvalue = 10;
		}
	}, 30000);

	return Caloriesvalue;
}

function getstepsValue() {
	setInterval(() => {
		StepsValue = StepsValue + 100;
		if (StepsValue == 10000) {
			StepsValue = 100;
		}
	}, 30000);
	return StepsValue;
}

function getactivemin() {
	setInterval(() => {
		activeMinvalue = activeMinvalue + 1;
		if (activeMinvalue == 92) {
			activeMinvalue = 92;
		}
	}, 30000);
	return activeMinvalue;
}
module.exports = { getstepsValue, getCaloriesValue, getactivemin };
