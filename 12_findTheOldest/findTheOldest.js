const findTheOldest = function(people) {
	let oldestAge = 0;
	let oldestPerson;

	people.forEach(person => {
		let age;
		if (person["yearOfDeath"] === undefined) {
			age = new Date().getFullYear() - person["yearOfBirth"];
		}
		else {
			age = person["yearOfDeath"] - person["yearOfBirth"];
		}
			
		if (age > oldestAge) {
			oldestAge = age;
			oldestPerson = person;
		}
	});
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
