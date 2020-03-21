const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let result = [];
	for (let item of expr.match(/.{1,10}/g)) {
		if (item === '**********') result.push(' ');
		else {
			let arrayMorse = [];
			let arrayWord = parseInt(item).toString().match(/.{1,2}/g);
			for (let word of arrayWord) {
				if (word === '10') arrayMorse.push('.');
				if (word === '11') arrayMorse.push('-');
			}
			result.push(MORSE_TABLE[arrayMorse.join('')]);
		}
	}
	return result.join('');
}

module.exports = {
	decode
};