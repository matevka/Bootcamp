var movies = [{
	title: "first",
	rating: "3.5 ",
	hasWatched: true
},
{
	title: "second",
	rating: "4.5 ",
	hasWatched: false
},
{
	title: "third",
	rating: "4 ",
	hasWatched: true
},
{
	title: "fourth",
	rating: "5 ",
	hasWatched: false
}]

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + "stars;"
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
})