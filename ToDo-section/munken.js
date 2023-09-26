class ToDoElements {
    constructor() {
        //hidde the implicit one
    }

    addElements() {
        const center = document.getElementById("center");
        const mainSection = document.getElementById("main-section-containter");

        this.createAddBar(center);
        this.createTodoSection(mainSection);
        this.createDoneSection(mainSection);



    }

    createAddBar(center) {
        const container = document.createElement("div");
        container.classList.add("outLine", "add-bar-container");

        const addBar = document.createElement("input");
        addBar.classList.add("outLine");
        addBar.addEventListener('keydown', (e)=> {
            if(e.key === 'Enter'){
                TodoCreator.create(document.getElementById("modal-todo"), document.getElementById("modal-done"),  addBar.value);
                addBar.value = "";
            }
        })

        const sendButton = document.createElement("div");
        sendButton.classList.add("outLine", "done-button");


        const TodoCreator = new ElementToDO();

        sendButton.onclick = () => {
            if (addBar.value != "") {
                TodoCreator.create(document.getElementById("modal-todo"), document.getElementById("modal-done"),  addBar.value);
                addBar.value = "";
            }
        };


        container.appendChild(addBar);
        container.appendChild(sendButton);
        center.appendChild(container);
    }

    createTodoSection(mainSection) {

        const modalTodo = document.createElement("div");
        modalTodo.id = "modal-todo"
        modalTodo.classList.add("outLine", "modal");


        mainSection.appendChild(modalTodo)
    }

    createDoneSection(mainSection) {

        const modalDone = document.createElement("div");
        modalDone.id = "modal-done";
        modalDone.classList.add("outLine", "modal");
        
        mainSection.appendChild(modalDone)

    }
 

}

class ElementToDO {
    constructor() {

    }

    create(todoSection, doneSection, text) {
        const element = document.createElement("div");
        const doneButton = document.createElement("div");
        const deleteButton = document.createElement("div");

        element.classList.add("todo-element", "outLine");
        doneButton.classList.add("done-button", "outLine");
        deleteButton.classList.add("delete-button", "outLine");

        deleteButton.onclick = () => {

            
            element.remove();
            
            
        }

        doneButton.onclick = () => {
            
            doneButton.remove();
            element.remove();
            doneSection.appendChild(element)
        }        


        element.innerHTML = text;
        element.appendChild(doneButton);
        element.appendChild(deleteButton);
        todoSection.appendChild(element);
    }
    
    

}