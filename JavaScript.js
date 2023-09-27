'use strict'

const mode = document.getElementById('btn-mode'); //esto no hace nada
const listaTareas = document.getElementById('tasks');
const listaCompleta = document.getElementById('tasks-complete');

const tareas = []; //eso es global

function agregar() {
    const tarea = document.getElementById('take-task').value;
    if (tarea !== '') {
        tareas.push(tarea);
        document.getElementById('take-task').value = '';
        console.log(tareas);
        mostrarTareas();
    };
};//Funciona

 // esto tendría que estar arriba
function mostrarTareas() {
        const contenido = tareas.slice(-1); //esto toma el último elemento agregado a "tareas"
         // Este div 
     
        const item = document.createElement('li');
        item.classList.add('item') //esto tendría que ear adento de la lista no adentro de div

        const elemento = document.createElement('p');
        elemento.classList.add('text')
        elemento.innerHTML = contenido;

        item.appendChild(elemento); //lo mismo no tendría que estar adentro de un div

        const btnContain = document.createElement('div');
        btnContain.classList.add('buttons');
        item.appendChild(btnContain);

        const btnComplete = document.createElement('button'); 
        btnComplete.classList.add('btnC');
        btnComplete.id = "complete"; //lo mismo con el id

        btnComplete.onclick = () => {
            tareasCompletas(item);
            console.log("hell")
            btnComplete.remove();
        };

        btnContain.appendChild(btnComplete);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('btnD'); //este no tiene id
        btnDelete.onclick = () => {
            item.remove();
        };

        btnContain.appendChild(btnDelete);

        listaTareas.appendChild(item);
}//Funciona

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