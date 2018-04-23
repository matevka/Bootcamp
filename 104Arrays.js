//create an array
var friends = ["Charlie", "Liz", "David", "Mattias"];
//to get data out of the newly created array
console.log(friends[0])  //"Charlie"
//or use 2 (or more) at the same time
friends[1] + " <3 " + friends[2]  //Liz <3 David
//update array values
var friends = ["Charlie", "Liz", "David", "Mattias"];
friends[0] = "Chuck";
friends[1] = "Lizzie";
//or extend the array
var friends = ["Charlie", "Liz", "David", "Mattias"];
friends[4] = "Amelie";
//other way of creating the same array
var friends = new Array()
//Arrays can hoold any type of data
var random_collection = [49, true, "Hermione", null];
//arrays also have a lenght property just like strings
var nums = [45,37,89,24]
nums.length //4