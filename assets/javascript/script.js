function adicionar(){ 

	let tarefa = document.getElementById('task').value;
	let hora = document.getElementById('hora').value;
	let data = document.getElementById('data').value;
	
	let list_tasks = document.getElementById("list_tasks");
	list_tasks.innerHTML = "<label class='new_task'><p id='name_task'>" + tarefa + "</p>" + "<p id='hour_task'>" + hora + "</p>" + "<p id='date_task'>" + data +"</p>" + "</label>" + "<section><button onclick='excluir()' id='excluir'>X</button></section>";
}



function excluir(){

}