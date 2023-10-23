const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;

	numArray.forEach(num => {
		sum += num;	
	});
	return sum;
};

const multiply = function(numArray) {
	if (!Array.isArray(numArray) || numArray.length === 0) {
		return 'ERROR';
	}
	let multiplication = 1;

	numArray.forEach(num => {
		multiplication *= num;
	});
	return multiplication;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2); 
};

const factorial = function(num) {
	let fact = 1;
	for(let i = 2; i <= num; i++) {
		fact *= i;
	}
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
