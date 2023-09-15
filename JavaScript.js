const principal = document.getElementById("main");

const header = document.createElement("div");
header.classList.add("outLine", "header");

const center = document.createElement("div");
center.classList.add("outLine", "center");
center.id = "center"

const mainSectionContainter = document.createElement("div");
mainSectionContainter.classList.add("outLine", "mainSection");
mainSectionContainter.id = "main-section-containter";

///////////////////////////////////////////////////////
const myFirtObjet =  new ToDoElements()
const getStartedButton = document.createElement("div");
getStartedButton.innerHTML =  "get started!" 
getStartedButton.classList.add("outLine", "startButton")



getStartedButton.onclick = () => {
    getStartedButton.remove();
    myFirtObjet.addElements();
};

center.appendChild(getStartedButton)

principal.appendChild(header);
principal.appendChild(center);
principal.appendChild(mainSectionContainter);