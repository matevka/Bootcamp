var count = 1;

while(count < 6) {
	console.log("count is " + count);
	count++;
}

//string we're looping over:
var str = "hello";
//first character is at index 0
var count = 0;

while(count < str.length) {
	console.log(str[count]);
	count++;
}

//infinite loops

var count = 0;

while(count < 10) {
	console.log(count);
}