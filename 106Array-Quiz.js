var numbers = [22, 67, 33, 96, 88];

//what does the following line print?
console.log(numbers[numbers.length])
//it says undefined
console.log(numbers.length)
//says 5

var friends = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Prongs",]
];

//what does the following line print?
console.log(friends[2][0])
//we are working with nested arrays here, "["Harry", "Ron", "Hermione"]" is one string
//with the index of 0 and "["Mooney", "Wormtail", "Prongs",]" are also
//just one string with the index of 2
//with friends[2][0] we are calling the 0th index of the 3rd array  (index of 2)

