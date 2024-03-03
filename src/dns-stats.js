const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let countedDomains = {};

	domains.forEach((domain) => {
		const reversedDomain = domain.split(".").reverse();
		let countedDomain = "";

		reversedDomain.forEach((subDomain) => {
			countedDomain += `.${subDomain}`;

			if (countedDomains[countedDomain]) {
				countedDomains[countedDomain]++;
			} else {
				countedDomains[countedDomain] = 1;
			}
		});
	});

	return countedDomains;
}

module.exports = {
	getDNSStats,
};
