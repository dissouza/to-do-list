let tarefa = document.getElementById('task').value;
let hora = document.getElementById('hora').value;
let data = document.getElementById('data').value;

function adicionar(){	
	
	let newTask = document.createElement('label')
	newTask.classList.add('new_task');
	newTask.innerHTML =`
	<input type='checkbox' id='check'>
	<p id='name_task'></p>
	<p id='hour_task'></p>
	<p id='date_task'></p>
	</input>
	</label>	
	`;

	let excluir_button = document.createElement('section')
	excluir_button.classList.add('excluir_button');
	excluir_button.innerHTML = `<button onclick='excluir()' id='excluir'>X</button>`;

	if (tarefa && hora && data == 0){
		alert("Preencha os dados da tarefa")

		else{



			document.getElementById('list_tasks').appendChild(newTask);
			document.getElementById('list_tasks').appendChild(excluir_button);

		}
	}
}



function excluir(){

}