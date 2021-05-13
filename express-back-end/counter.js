// function counter() {
// 	var i = 0;
// 	while ((i = 500)) {
// 		console.log(i);
// 		i++;
// 	}
// }

// counter();

var value = 100;
let timerId = setInterval(() => {
	value = value + 10;
	console.log(value);
}, 2000);
console.log(value);
