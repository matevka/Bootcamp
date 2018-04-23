console.log('Print all numbers between -10 and 19');

for(var i = -10; i < 20; i++){
	console.log(i);
}

console.log('Print all even numbers between 10 and 40');

for(var i = 10; i <= 40; i+=2){
	console.log(i);
}

console.log('Print all odd numbers between 300 and 333');

for(var i = 301; i <= 333; i+=2){
	console.log(i);
}

console.log('Print all numbers divisible by 5 AND 3 between 5 and 50');
var fourth = 5;

while(fourth <= 50) {
	if(fourth % 5 === 0 && fourth % 3 === 0)
	console.log(fourth);
	fourth++;
}

for(var i = 5; i <=50; i++){
	if(fourth % 5 === 0 && fourth % 3 === 0)
		console.log(i);
}