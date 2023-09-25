'use strict'

const mode = document.getElementById('btn_mode'); //esto no hace nada

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

const listaTareas = document.getElementById('task_container'); // esto tendría que estar arriba
function mostrarTareas() {
        const prueba = tareas.slice(-1); //esto toma el último elemento agregado a "tareas"
        const elemento = document.createElement('div'); // Este div 

        elemento.setAttribute('id', 'elemento'); //por qué esto no está con "elemento.id = "" "?? todos tienen el mismo id
        const item = document.createElement('li'); //esto tendría que ear adento de la lista no adentro de div
        item.textContent = prueba; 
        elemento.appendChild(item); //lo mismo no tendría que estar adentro de un div

        const btnComplete = document.createElement('button'); 
        btnComplete.classList.add('boton');
        btnComplete.setAttribute('id', 'complete'); //lo mismo con el id

        elemento.appendChild(btnComplete);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('boton'); //este no tiene id

        elemento.appendChild(btnDelete);

        listaTareas.appendChild(elemento);
}//Funciona

const listaCompleta = document.getElementById('task_complete'); //esto tiene que estar declarado arriba


function tareasCompletas() {
    const mover = document.getElementById('elemento');
    console.log(mover)
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

accion.addEventListener('click', ()=>{
        tareasCompletas();
})


