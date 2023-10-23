const fibonacci = function(count) {
	let nMinusOneNum = 1;
	let nMinusTwoNum = 1;
	let tmp = 0;

	if (count < 1) {
		return 'OOPS';
	}
	for(i = 2; i < count; i++) {
		tmp = nMinusOneNum;
		nMinusOneNum = nMinusOneNum + nMinusTwoNum;
		nMinusTwoNum = tmp;
	}
	return (nMinusOneNum);
};

// Do not edit below this line
module.exports = fibonacci;
