const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let possibleNumbers = [];
	let numAsStr = String(n);

	for (let i = 0; i < numAsStr.length; i++) {
		let possibleNumber = numAsStr.replace(numAsStr[i], "");
		possibleNumbers.push(+possibleNumber);
	}

	return Math.max(...possibleNumbers);
}

module.exports = {
	deleteDigit,
};
