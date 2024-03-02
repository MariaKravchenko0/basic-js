const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const result = [];
	const heights = [];

	arr.forEach((height) => {
		if (height !== -1) {
			heights.push(height);
		}
	});

	let sortedHeights = heights.sort((a, b) => a - b);

	arr.forEach((height) => {
		if (height === -1) {
			result.push(height);
		} else {
			result.push(sortedHeights[0]);
			sortedHeights.shift();
		}
	});

	return result;
}

module.exports = {
	sortByHeight,
};
