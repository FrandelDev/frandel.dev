import typier from "./typier.js";
import contactEvents from "./contact.js";
import {panelsTransition, welcomeTransition} from "./transitions.js";
import {addProjects,addTools} from "./feeding.js";

panelsTransition();
welcomeTransition();

addProjects();
addTools();



const p = document.querySelector(".project");

p.addEventListener("click",()=>{
    document.querySelector("main").insertAdjacentHTML("afterbegin","<div class='project-descriptor'></div>") 
})