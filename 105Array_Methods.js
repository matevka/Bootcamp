//the most often used built in array methods

//push
var colors = ["red", "orange", "yellow"];
colors.push("green");
//["red", "orange", "yellow", "green"]

//pop
var colors = ["red", "orange", "yellow"];
colors.pop();
//["red", "orange"]

//unshift
var colors = ["red", "orange", "yellow"];
colors.unshift("blue")
//["blue", "red", "orange", "yellow"]
//bear in mind that unshift adds to the array and shift removes... jajj fck logic

//shift
var colors = ["red", "orange", "yellow"];
colors.shift();
//["orange", "yellow"];
//shift also returns the removed element which i can store in a variable
var col = colors.shift(); //orange
//takes an argument and tries to find it in an array, and if it finds it
//returns the index of it.

//indexOf
var friends = ["Charlie", "Liz", "David", "Mattias" ,"Liz"];
//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4
//returns -1 if the element is not present
friend.indexOf("Hagrid"); //-1

//slice
var fruits = ["Banana" , "Orange" , "Lemon" , "Apple" , "Mango"]
//use slice to copy the 2nd and 3rd fruits
//specify index where the new array starts(1) and ends (3)
//the 3rd item wont be included
var citrus = fruits.slice(1,3)

//this does not alter the original fruits array
//citrus contains ["Orange" , "Lemon"]
//fruits contains ["Banana" , "Orange" , "Lemon" , "Apple" , "Mango"]

//you can also use slice() to copy an entire array
//just use empty parentheses to copy all
var nums = [1 , 2 , 3];
var otherNums = nums.slice();
//both arrays are [1 , 2 , 3]
