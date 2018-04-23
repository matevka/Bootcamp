var tag1 = document.getElementById("first");
var tag2 = document.getElementsByClassName("special")[0];
var tag3 = document.getElementsByTagName("p")[0]; 
var tag4 = document.querySelector("#first");
var tag5 = document.querySelector(".special");
var tag6 = document.querySelectorAll(".special")[0];
var tag7 = document.querySelectorAll("p")[0]; 
var tag8 = document.querySelector("h1 + p"); 

/////////////////////////////////////

///////////**MANIPULATE

//in order to manipulate an element, we can define the modifications
//in CSS first,  and the apply that class to an element with javascript
// like so:

// var p = document.queryselector("p")[0];

//occasionally you might want to double check if theres any class
//has been given to the element

//p.classlist  <-should be empty

//p.classlist.add("big")  <- big is a pre-defined class in our style tag

// further changes with the toggle - remove

//p.classlist.toggle  <-boolean value
//p.classlist.remove  <-guess what does it do...

//Alter the text content:

//var tag = document.querySelector("p");

//Retrive the textContent:
//tag.textContent

//Alter it:
//tag.textContent = "blah blah blah";  <-this will set the textContent to 
//blah blah blah inside of this paragraph

//Bad side of it, that it gets rid of any HTML in the element, if it had a 
//<strong> element in it... well now its not.
//to double check before u remove important HTML parts use innerHTML likeso:

//p.innerHTML  <-gives back the text as it was written in the HTML

//and lastly, dont always have to create a variable to manipulate DOM

//document.querySelector("h1").textContent = "Short way of modifying things"

/////////**Altering Attributes

//<a href="www.google.com"> I am a link </a>
//<img src="logo.png">

//in order to alter the aforementioned attributes use .getAttribute / .setAttribute
//var link = document.querySelector("a");
//link.getAttribute("href");  <-"www.google.com"
//CHANGE HREF ATTRIBUTE
//link.setAttribute("href","www.dogs.com");
//<a href="www.dogs.com"> I am a link</a>

//TO CHANGE THE IMAGE SRC
//var img = document.queryselector("img");
//img.setAttribute("src","corgi.jpg")
//<img src="corgi.jpg">


/////////**USE A LOOP TO CHANGE ALL THE ATTRIBUTES:

// var links = document.getElementsByTagName("a");
// for(var i = 0; i < links.lenght; i++) {
//	links[i].style.background = "red";
//	links[i].style.border = "5px dashed blue";
//}

//this will loop through all the attributes and applies the style changes.
//and for the ultimate pisstake, lets change google links to bing.com

// for(var i = 0; i < links.lenght; i++) {
// links[i].setAttribute("href","http://www.bing.com")
//}

/////////**EVENT LISTENERS

var h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
	h1.style.background = "orange";
});

// document.querySelector("ul").addEventListener("click", function(){
// 	console.log("you clicked me");
// })

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	})
}

var button = document.querySelector("button");
//var isBlue = false;

//button.addEventListener("click", function(){
//if (isBlue) {
//		document.body.style.backgroundColor = "White";
//	 }	else {
//		document.body.style.backgroundColor = "Blue";
//	 }
//	 isBlue = !isBlue
//})

button.addEventListener("click", function(){
	document.body.classList.toggle("blue"); 
});