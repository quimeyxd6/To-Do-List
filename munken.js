class ToDoElements{
    constructor(){
        //hidde the implicit one
    }

    addElements(){
        const center = document.getElementById("center");
        const mainSection = document.getElementById("main-section-containter");

        this.createAddBar(center);
        this.createTodoSection(mainSection);
        this.createDoneSection(mainSection);
    }
    
    createAddBar(center){

        const addBar = document.createElement("div");
        addBar.classList.add("outLine", "add-bar");

        center.appendChild(addBar)

    }

    createTodoSection(mainSection){

        const modalTodo = document.createElement("div");
        modalTodo.classList.add("outLine", "modal");

        mainSection.appendChild(modalTodo)
    }

    createDoneSection(mainSection){

        const modalDone = document.createElement("div");
        modalDone.classList.add("outLine", "modal");

        mainSection.appendChild(modalDone)

    }

    addTodo(){
        // here it will be created a todo item (probably an object¿¿)
    }

    compleateTodo(){
        //the name sayit all
    }


}

class ElementToDO{
    constructor(){

    }

    create(){
        const element = document.createElement("div");
        const doneButton = document.createElement("div");
        const deletButton = document.createElement("div");

        element.classList.add("todo-element");
        doneButton.classList.add("done-buton");
        
    }
}