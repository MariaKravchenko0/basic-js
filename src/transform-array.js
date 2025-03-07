const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr))
		throw new Error("'arr' parameter must be an instance of the Array!");

	const transformedArray = [];

	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case "--discard-next":
				if (i !== arr.length - 1) i++;
				break;

			case "--discard-prev":
				if (i === 0 || !transformedArray.includes(arr[i - 1])) break;

				transformedArray.pop();
				break;

			case "--double-next":
				if (i !== arr.length - 1) transformedArray.push(arr[i + 1]);
				break;

			case "--double-prev":
				if (i === 0 || !transformedArray.includes(arr[i - 1])) break;

				transformedArray.push(arr[i - 1]);
				break;

			default:
				transformedArray.push(arr[i]);
				break;
		}
	}

	return transformedArray;
}

module.exports = {
	transform,
};
