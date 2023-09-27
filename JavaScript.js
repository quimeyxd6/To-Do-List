'use strict'

const mode = document.getElementById('btn-mode'); //Inactive button
const listaTareas = document.getElementById('tasks');
const listaCompleta = document.getElementById('tasks-complete');

const tareas = []; 

function mostrarTareas() {
        const contenido = tareas.slice(-1);
     
        const item = document.createElement('li');
        item.classList.add('item');

        const elemento = document.createElement('p');
        elemento.classList.add('text');
        elemento.innerHTML = contenido;

        item.appendChild(elemento);

        const btnContain = document.createElement('div');
        btnContain.classList.add('buttons');
        item.appendChild(btnContain);

        const btnComplete = document.createElement('button'); 
        btnComplete.classList.add('btnC');
        btnComplete.id = "complete";

        btnComplete.onclick = () => {
            tareasCompletas(item);
            btnComplete.remove();
        };

        btnContain.appendChild(btnComplete);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btnD');
        btnDelete.id = 'delete';
        btnDelete.onclick = () => {
            item.remove();
        };

        btnContain.appendChild(btnDelete);

        listaTareas.appendChild(item);
}

function agregar() {
    const tarea = document.getElementById('take-task').value;
    if (tarea !== '') {
        tareas.push(tarea);
        document.getElementById('take-task').value = '';
        console.log(tareas);
        mostrarTareas();
    };
};

function tareasCompletas(elemento) {
    console.log(elemento)
    if(elemento){
        listaTareas.removeChild(elemento);
        listaCompleta.appendChild(elemento);
    }
}

document.getElementById('take-task').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregar();
    };
});