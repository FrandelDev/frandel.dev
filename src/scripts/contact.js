import socialsIcons from "../assets/img/logos-svg.json" assert { type: "json" };
import addEmailService from "./email.js";
const textarea = document.querySelector('textarea');
const socials = document.querySelector("#socials");

function contactEvents(){
textarea.addEventListener('focus', function() {
    this.placeholder = '';
  });
textarea.addEventListener("mouseleave",function(){
    this.placeholder = "Mensaje:";
})

socials.innerHTML += `<a href="mailto:frandelcorporan@gmail.com">${socialsIcons.socials["gmail-icon"]}</a>`;
socials.innerHTML += `<a href="https://www.linkedin.com/in/frandeldev/" target="_blank">${socialsIcons.socials["linkedin-icon"]}</a>`;
addEmailService();
}
export default contactEvents();
