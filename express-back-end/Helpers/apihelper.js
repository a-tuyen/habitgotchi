var Caloriesvalue = 50;
let StepsValue = 100;

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
module.exports = { getstepsValue, getCaloriesValue };
