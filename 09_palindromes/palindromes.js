const palindromes = function(string) {
	let reverseString = "";
	let onlyAlphaAndNumString;

	string = string.toLowerCase();
	onlyAlphaAndNumString = string;
	for(let i = string.length - 1; i >= 0; i--) {
		if (string[i].match(/[a-z0-9]/)) {
			reverseString += string[i];
		}
		else {
			console.log(string[i]);
			onlyAlphaAndNumString = onlyAlphaAndNumString.replace(string[i], '');
		}
	}
	console.log(onlyAlphaAndNumString);
	console.log(reverseString);
	return (onlyAlphaAndNumString === reverseString);
};

// Do not edit below this line
module.exports = palindromes;
