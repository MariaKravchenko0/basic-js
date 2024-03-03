const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const {
		repeatTimes = 1,
		separator = "+",
		addition = "",
		additionRepeatTimes = 1,
		additionSeparator = "|",
	} = options;

	const repeatedAdditionsArr = [];
	const repeatedStrArr = [];

	for (let i = 0; i < additionRepeatTimes; i++) {
		repeatedAdditionsArr.push(String(addition));
	}

	const repeatedAdditionsStr = repeatedAdditionsArr.join(additionSeparator);

	for (let j = 0; j < repeatTimes; j++) {
		repeatedStrArr.push(String(str) + repeatedAdditionsStr);
	}

	return repeatedStrArr.join(separator);
}

module.exports = {
	repeater,
};
