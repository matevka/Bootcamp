var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?")

while(input !== "quit") {
		//handle input
		if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		//ask for new todo
		var NewTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(NewTodo);
	}	
	//ask again for new input
	var input = prompt("What would you like to do?")
}
console.log ("Ok you quit the app")