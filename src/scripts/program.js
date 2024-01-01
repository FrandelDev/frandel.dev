import typier from "./typier.js";
import {panelsTransition, welcomeTransition} from "./transitions.js";
import {addProjects,addTools} from "./feeding.js";

panelsTransition();
welcomeTransition();

addProjects();
addTools();