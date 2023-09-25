'use strict'

const mode = document.getElementById('btn_mode');

const tareas = [];

function agregar() {
    const tarea = document.getElementById('input_task').value;
    if (tarea !== '') {
        tareas.push(tarea);
        document.getElementById('input_task').value = '';
        console.log(tareas);
        mostrarTareas();
    };
};//Funciona

const listaTareas = document.getElementById('task_container');
function mostrarTareas() {
        const prueba = tareas.slice(-1);
        const elemento = document.createElement('div');
        elemento.setAttribute('id', 'elemento');
        const item = document.createElement('li');
        item.textContent = prueba;
        elemento.appendChild(item);
        const btnComplete = document.createElement('button');
        btnComplete.classList.add('boton');
        btnComplete.setAttribute('id', 'complete');
        elemento.appendChild(btnComplete);
        const btnDelete = document.createElement('button');
        btnDelete.classList.add('boton');
        elemento.appendChild(btnDelete);
        listaTareas.appendChild(elemento);
}//Funciona

const listaCompleta = document.getElementById('task_complete');
function tareasCompletas() {
    const mover = document.getElementById('elemento');
    if(mover){
        listaTareas.removeChild(mover);
        listaCompleta.appendChild(mover);
    }
    //Tomo elemento, pero no especifico cual, a corregir
}

document.getElementById('input_task').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregar();
    };
});

const accion = document.getElementById('complete');
if(accion){
    accion.addEventListener('click', ()=>{
        tareasCompletas();
    })
}

