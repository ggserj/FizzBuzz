// Fizz Buzz
// Напишите программу, которая выводит на экран числа от 1 до 100.
// При этом вместо чисел, кратных 3, программа должна выводить слово «Fizz»,
// а вместо чисел, кратных 5 — слово «Buzz».
// Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»


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


//гольф || write-only
for (let i=0;i<100;){
	console.log((++i%3?"":"Fizz")+(i%5?"":"Buzz")||i)
}
