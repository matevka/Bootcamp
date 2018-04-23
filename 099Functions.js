//isEven

// function isEven(num){
// 	if(num % 2 === 0) {
// 			//return true if Even
// 		return true;
// 	} else {
// 			//return false otherwise
// 		return false;
// 	}
// }

function isEven(num){
	return num % 2 === 0;
}

//num % 2 === 0; is a boolean statement, by default it gives back a true / false answer

function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2 ; i <= num; i++) {
		result = result * i;
	}
	//return the result variable
	return result;
}

function kebabToSnake(str) {
	//replace all "-" with "_" 
	var newStr = str.replace(/-/g , "_")
	//return str
	return newStr;
}