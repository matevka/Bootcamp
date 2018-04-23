//create a number
var secretNumber = 4;

//ask user for guess

var stringguess = (prompt("Guess a number"));
var guess = Number(stringguess);
//check if guess is right
if (guess) === secretNumber) {
alert("YOU GOT IT RIGHT")
}
//otherwise, check if higher

else if (guess) > secretNumber) {
	alert("too high, guess again")
}
//check if lower

else {
	alert("too low, guess again")
}