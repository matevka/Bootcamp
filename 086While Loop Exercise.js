console.log('Print all numbers between -10 and 19');

var first = -10;

while(first < 20) {
	console.log(first);
	first++;
}
console.log('Print all even numbers between 10 and 40');
var second = 10;

while(second <= 40) {
	console.log(second);
	second+=2;
}
console.log('Print all odd numbers between 300 and 333');
var third = 301;

while(third <= 333) {
	console.log(third);
	third+=2;
}
console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');
var fourth = 5;

while(fourth <= 50) {
	if(fourth % 5 === 0 && fourth % 3 === 0)
	console.log(fourth);
	fourth++;
}