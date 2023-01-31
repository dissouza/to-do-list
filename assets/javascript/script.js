function adicionar(){

	let tarefa = document.getElementById('task').value;
	let hora = document.getElementById('hora').value;
	let data = document.getElementById('data').value;
	
	let newTask = document.createElement('label')
	newTask.classList.add('new_task');
	newTask.innerHTML =`<input type='checkbox' id='check'>
						<p id='name_task'>${tarefa}</p>
						<p id='hour_task'>${hora}</p>
						<p id='date_task'>${data}</p>
						</input>
						</label>`;

	let excluir_button = document.createElement('section')
	excluir_button.classList.add('excluir_button');
	excluir_button.innerHTML = `<input type='button' onclick='excluir()' id='excluir' value='X'></input>`;

	if (tarefa, hora, data == false){
		alert("Preencha as informações da tarefa para adicionar");
	}

	else{

	document.getElementById('list_tasks').appendChild(newTask);
	document.getElementById('list_tasks').appendChild(excluir_button);

	}
}

function excluir(){
	const new_task = document.getElementByClassName(new_task);
	document.getElementById("list_tasks").removeChild(new_task);
}