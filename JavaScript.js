'use strict'

const mode = document.getElementById('btn_mode');
const taskInput = document.getElementById('input_task');

const taskList = [];

function addTask(){
    const task = taskInput.value;
    if (task !== '') {
        taskList.push(task);

        taskInput.value = '';
    }
}



const prueba = document.getElementById('btn_task');
prueba.addEventListener('click', ()=>{
    addTask();
})

console.log(taskList)