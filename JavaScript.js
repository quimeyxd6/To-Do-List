'use strict'

const mode = document.getElementById('btn_mode');

let task = '';
const tasks = [];

function addTask(){
    task = document.getElementById('input_task').value;
    if (task !== '') {
        tasks.push(task);
        document.getElementById('input_task').value = '';
        showTasks();
    }
}

const taskList = document.getElementById('task_container');
function showTasks() {
    
    taskList.innerHTML = ''; // Limpiar la lista antes de agregar las tareas nuevamente
  
    for (let i = 0; i < task.length; i++) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('item_div');
        const item = document.createElement('li');
        item.classList.add('item');
        taskItem.appendChild(item);
        const btnAdd = document.createElement('button');
        btnAdd.classList.add('btn_complete');
        taskItem.appendChild(btnAdd);
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btn_delete');
        taskItem.appendChild(btnDelete);


        item.textContent = tasks[i];
        taskList.appendChild(taskItem);
    }
  }

const prueba= document.getElementById('input_task').addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        addTask()
    }
})

console.log(tasks);