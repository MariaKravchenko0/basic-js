const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
		this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}

	_transform(message, key, isEncrypt) {
		if (!message || !key) throw new Error("Incorrect arguments!");

		message = message.toUpperCase();
		key = key.toUpperCase();

		while (key.length < message.length) {
			key += key;
		}

		let transformedMessage = "";

		for (let i = 0, j = 0; i < message.length; i++, j++) {
			if (this.alphabet.includes(message[i])) {
				const messageLetterIndex = this.alphabet.indexOf(message[i]);
				const keyLetterIndex = this.alphabet.indexOf(key[j]);

				const newLetterIndex = isEncrypt
					? (messageLetterIndex + keyLetterIndex) % 26
					: (messageLetterIndex - keyLetterIndex + 26) % 26;

				transformedMessage += this.alphabet[newLetterIndex];
			} else {
				transformedMessage += message[i];
				j--;
			}
		}

		return this.isDirect
			? transformedMessage
			: transformedMessage.split("").reverse().join("");
	}

	encrypt(message, key) {
		return this._transform(message, key, true);
	}

	decrypt(message, key) {
		return this._transform(message, key, false);
	}
}

module.exports = {
	VigenereCipheringMachine,
};
