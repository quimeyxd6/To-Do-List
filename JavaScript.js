'use strict'

const principal = document.getElementById("main");

const header = document.createElement("div");
header.classList.add("outline", "header");

const center = document.createElement("div");
center.classList.add("outline", "center");

const mainSection = document.createElement("div");
mainSection.classList.add("outline", "mainSection");

const btn = document.createElement("button");
const probando = document.createElement("span");
probando.classList.add("button_top");
probando.textContent = "boton";
header.appendChild(btn);
btn.appendChild(probando);

//////////////////////////////////////////////

const cuadroTexto = document.createElement("input");
cuadroTexto.classList.add("outline", "cuadroTexto");
cuadroTexto.placeholder = "agregar tarea";
center.appendChild(cuadroTexto);

/////////////////////////////////////////////

const list = document.createElement("div");
list.classList.add("list_container");
mainSection.appendChild(list);


const list2 = document.createElement("div");
list2.classList.add("list_container");
mainSection.appendChild(list2);

/////////////////////////////////////////////

cuadroTexto.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter'){
        tomarTarea();
    }
})

function tomarTarea(){
    const text = cuadroTexto.value;
    const item = document.createElement("p");
    
    item.textContent = text;
    list.appendChild(item);
}


principal.appendChild(header);
principal.appendChild(center);
principal.appendChild(mainSection);



