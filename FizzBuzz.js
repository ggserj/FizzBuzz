// Fizz Buzz
// Напишите программу, которая выводит на экран числа от 1 до 100.
// При этом вместо чисел, кратных 3, программа должна выводить слово «Fizz»,
// а вместо чисел, кратных 5 — слово «Buzz».
// Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»


// 2018
(function FizzBuzz(maxNumber = 100) {
	let result;
	function isDevBy(number, text, devBy) {
		if (number % devBy === 0) {result += text}
	}
	for (let i = 1; i <= maxNumber; i++) {
		result = "";
		isDevBy(i, 'Fizz', 3);
		isDevBy(i, 'Buzz', 5);
		console.log(result || i);
	}
})();


// 2019
{
	const fizzBuzz = (maxNumber = 100) => {
		const isDevBy = (number, devBy, text) => number % devBy ? '' : text;
		for (let i = 1; i <= maxNumber; i++) {
			let result = isDevBy(i, 3, 'Fizz');
			result += isDevBy(i, 5, 'Buzz');
			console.log(result || i);
		}
	};
	fizzBuzz();
}


// 2020
{
	const fizzBuzz = ({ startNumber = 1, maxNumber = 100, ...replacers }) => {
		if (isNaN(parseInt(startNumber))) return console.error('startNumber must be an integer', startNumber);
		if (isNaN(parseInt(maxNumber))) return console.error('maxNumber must be an integer', maxNumber);
		if (!Object.keys(replacers).length) replacers = { 3: 'Fizz', 5: 'Buzz' };

		const replacerKeys = Object.keys(replacers).map(key => parseInt(key));
		for (let i = startNumber; i <= maxNumber; i++) {
			let result = '';
			replacerKeys.forEach(replacerKey => {
				const isDividable = i % replacerKey === 0;
				if (isDividable) result += replacers[replacerKey];
			});
			console.log(result || i);
		}
	};
	fizzBuzz({});
}


// 2022
{
	const fizzBuzz = ({ from = 1, to = 100, ...replacers }) => {
		// При отсутствии в условии задачи каких-либо данных о внешней среде при вызовах функции, будем максимально проверять всё что приходит снаружи
		// Если будет больше гарантий во внешней среде, то можно будет сократить
		if (typeof from !== 'number' || isNaN(from)) return console.error(`'from' must be an integer`, from, this);
		if (typeof to !== 'number' || isNaN(to)) return console.error(`'to' must be an integer`, to, this);
		if (!(from < to)) console.warn(`'from' should be less than 'to'`, from, to, this);
		if (!Object.keys(replacers).length) replacers = { 3: 'Fizz', 5: 'Buzz' };
		const replacerKeys = Object.keys(replacers);
		const replacerValues = Object.values(replacers);
		if (!replacerKeys.every(key => typeof key === 'number')) return console.error(`replacers keys must be integers`, replacerKeys, this);
		if (!replacerValues.every(value => typeof value === 'string')) return console.error(`replacers values must be strings`, replacerValues, this);

		for (let i = from; i <= to; i++) {
			let result = '';
			replacerKeys.forEach(replacerKey => {
				const isDividable = i % replacerKey === 0;
				if (isDividable) result += replacers[replacerKey];
			});
			console.log(result || i);
		}
	};
	fizzBuzz({});
}


// Гольф | write-only
for(let i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);