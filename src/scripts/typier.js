
let typeWriter = document.querySelector('.type-writer');
let text = typeWriter.textContent;
typeWriter.textContent = '';
let flag = false
let i = 0;
function type() {
  if (i < text.length && !flag) {
        typeWriter.textContent += text.charAt(i);
    i++;
    if(typeWriter.textContent.length -1 == text.length-1){
        i=0;
        flag = true;
        typeWriter.innerHTML += "(<span class='logo-span type-writer'></span>)";
        typeWriter.classList.remove("type-writer");
        text = "dev"
    }
}
if(flag){
    let span = document.querySelector(".logo-span");
    span.textContent += text.charAt(i);
    i++
    if(span.textContent.length-1 == text.length-1){
        span.classList.remove("type-writer");
        typeWriter.classList.add("type-writer")
        typeWriter.style.animation = "blink-caret 1s step-end infinite";
        flag = false;
    }
}
setTimeout(type, 220);

}
export default type();

