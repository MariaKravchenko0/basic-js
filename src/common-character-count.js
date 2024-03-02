const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	const commonChars = [];

	let s1Arr = Array.from(s1);
	let s2Arr = Array.from(s2);

	s1Arr.forEach((element, index) => {
		if (s2Arr.includes(element)) {
			commonChars.push(element);

			s1Arr = s1Arr.slice(0, index) + s1Arr.slice(index + 1);

			const indexOfElement = s2Arr.indexOf(element);

			s2Arr = s2Arr.slice(0, indexOfElement) + s2Arr.slice(indexOfElement + 1);
		}
	});

	return commonChars.length;
}

module.exports = {
	getCommonCharacterCount,
};
