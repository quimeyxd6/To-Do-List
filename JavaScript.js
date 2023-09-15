'use strict'

const principal = document.getElementById("main");

const header = document.createElement("div");
header.classList.add("outline", "header");

const center = document.createElement("div");
center.classList.add("outline", "center");

const mainSection = document.createElement("div");
mainSection.classList.add("outline", "mainSection");

principal.appendChild(header);
principal.appendChild(center);
principal.appendChild(mainSection);

const btn = document.createElement("button");
const probando = document.createElement("span");
probando.classList.add("button_top");
probando.textContent = "boton";
header.appendChild(btn);
btn.appendChild(probando);