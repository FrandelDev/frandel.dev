const panels = document.querySelector("#panels-container");
const welcome = document.querySelector("#welcome");
function panelsTransition(){
 
        panels.style.opacity = "1";
         panels.style.transform = "translateY(10px)";

}
function welcomeTransition(){
    welcome.style.opacity = "1";
    welcome.style.transform = "translateY(-30px)";
}

export {panelsTransition, welcomeTransition}