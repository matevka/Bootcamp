var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?")

while(input !== "quit") {
		//handle input
		if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	}	else if (input === "delete"){
		deleteTodo();
	}
	//ask again for new input
	var input = prompt("What would you like to do?")
}
console.log ("Ok you quit the app")

function listTodos(){
	console.log("**********")
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo);
	});
	console.log("**********")
}

function addTodo(){
	//ask for new todo
	var NewTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(NewTodo);
	console.log("Added Todo")
}

function deleteTodo(){
	//ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete")
	//delete that todo
	//splice method comes into the game now
	todos.splice(index, 1);
	console.log("deleted Todo")
}