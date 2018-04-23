//to loop an array using a for loop, we need to make use of arrays length property
var colors = ["red", "orange", "yellow", "green"]

for(var i = 0; i < colors.length; i++ ) {
	console.log(colors[i]);
}

//JavaScript provides an easy built-in way of iterating over an array:ForEach
//arr.forEach(somefunction)

var colors = ["red", "orange", "yellow", "green"]

colors.forEach(function(color){
	//color is a placeholder, call it whatever you want
	console.log(color);
});
//this code will run length-1 times, and fills the console log with the word
//color 4 times in this case

//we usually want it to do something with each item in the given array
//not very useful but.. like this:

colors.forEach(function(iLoveDogs){
	console.log("Inside the forEach" + iLoveDogs);
});

//in this example iLoveDogs holds the value of each item in the array
//so you*ll get the console log filled with text like:
//Inside the forEach red
//Inside the forEach orange, etc... you get the idea
//bit more useful explanation... lets pre define a function we can call
//later in the forEach.
function printColor(color){
	console.log("********");
	console.log(color);
	console.log("********");
}
//if i use forEach now, with the pre defined function, it all makes sense
colors.forEach(printColor);

//worth mentioning that you can use a while loop to run forEach

var count = 0;
while(count < colors.length) {
	console.log(colors[count]);
	count++;
}

