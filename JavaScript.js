'use strict'

const mode = document.getElementById('btn_mode');

const tareas = [];

const complete = [];


function agregar() {
    const tarea = document.getElementById('input_task').value;
    if (tarea !== '') {
        tareas.push(tarea);
        document.getElementById('input_task').value = '';
        console.log(tareas);
        mostrarTareas();
    };
};

const listaTareas = document.getElementById('task_container');
function mostrarTareas() {
        const prueba = tareas.slice(-1);
        const item = document.createElement('li');
        item.textContent = prueba;
        listaTareas.appendChild(item);
        const btnComplete = document.createElement('button');
        listaTareas.appendChild(btnComplete);
        const btnDelete = document.createElement('button');
        listaTareas.appendChild(btnDelete);
}



document.getElementById('input_task').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregar();
    };
});

