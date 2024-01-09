const panels = document.querySelector("#panels-container");
const welcome = document.querySelector("#welcome");
const code = document.querySelector("#code");
function panelsTransition(){
 
        panels.style.opacity = "1";
         panels.style.transform = "translateY(10px)";

}
function welcomeTransition(){
    welcome.style.opacity = "1";
    welcome.style.transform = "translateY(-30px)";

    code.style.opacity = "1";
    code.style.transform = "translateY(-30px)";
}

export {panelsTransition, welcomeTransition}