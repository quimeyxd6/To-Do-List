'use strict'

const mode = document.getElementById('btn_mode'); //esto no hace nada
const botonTarea = document.getElementById('btn_tarea');
const listaTareas = document.getElementById('task_container');
const listaCompleta = document.getElementById('task_complete');

const tareas = []; //eso es global

function agregar() {
    const tarea = document.getElementById('input_task').value;
    if (tarea !== '') {
        tareas.push(tarea);
        document.getElementById('input_task').value = '';
        console.log(tareas);
        mostrarTareas();
    };
};//Funciona

 // esto tendría que estar arriba
function mostrarTareas() {
        const contenido = tareas.slice(-1); //esto toma el último elemento agregado a "tareas"
         // Este div 
     
        const item = document.createElement('li'); //esto tendría que ear adento de la lista no adentro de div
        item.id = 'items';

        const elemento = document.createElement('div');
        elemento.innerHTML = contenido;

        item.appendChild(elemento); //lo mismo no tendría que estar adentro de un div

        const btnComplete = document.createElement('button'); 
        btnComplete.classList.add('boton');
        btnComplete.id = "complete"; //lo mismo con el id

        btnComplete.onclick = () => {
            tareasCompletas();
            console.log("hell")
            btnComplete.remove();
        };
        

        item.appendChild(btnComplete);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('boton'); //este no tiene id
        btnDelete.onclick = () => {
            item.remove();
        };

        item.appendChild(btnDelete);

        listaTareas.appendChild(item);
}//Funciona

function tareasCompletas() {
    const mover = document.getElementById('items');
    console.log(mover)
    if(mover){
        listaTareas.removeChild(mover);
        listaCompleta.appendChild(mover);
    }
}

document.getElementById('input_task').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregar();
    };
});

botonTarea.onclick = () => {
    agregar();
}
