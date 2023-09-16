
class ModeManager{

    constructor(){
        //hidde the implicit one
    }

    createToggleButton() {
        const toggleButtonContainer = document.createElement("div");
        toggleButtonContainer.classList.add("toggle-button-container", "outLine");

        const secondContainer = document.createElement("div");
        secondContainer.classList.add("second-container");

        const toggleButton = document.createElement("div");
        toggleButton.classList.add("toggle-button");

        const dayIcon = document.createElement("div");
        dayIcon.className = "day-icon";

        const nightIcon = document.createElement("div");
        nightIcon.className = "night-icon";

        toggleButton.appendChild(dayIcon);
        toggleButton.appendChild(nightIcon);

        toggleButtonContainer.onclick = () => {
            toggleButton.classList.toggle("rotate-icon");
        };

        
        toggleButtonContainer.appendChild(secondContainer);
        secondContainer.appendChild(toggleButton);
        

        toggleButtonContainer.appendChild(this.createClouds());

        return toggleButtonContainer;
    }

    createClouds(){
        const cloudContainer = document.createElement("div");
        cloudContainer.className = "asd";
        

        for (let i = 1; i <= 50; i++) {
            const cloud = document.createElement("div")
            cloud.className = "cloudStile";
            cloud.id = "imfree"

            const randomTop = Math.random() * 10;
            cloud.style.top = randomTop + "px";
            
            const randomLeft = Math.random() * 30;
            cloud.style.left = randomLeft + "px";

            cloudContainer.appendChild(cloud);
        }

        return cloudContainer

    }


}
    
