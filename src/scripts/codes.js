const codeImg = document.querySelector("#code");

const codes = ["./src/assets/img/codes/js.png","./src/assets/img/codes/css.png","./src/assets/img/codes/html.png","./src/assets/img/codes/sql.png","./src/assets/img/codes/cs.png"]
const infoStyle= window.getComputedStyle(codeImg);
function intervalCodes(){
if(infoStyle.display !== 'none'){
    let i =0
    setInterval(()=>{
        codeImg.src = codes[i];
        i < codes.length-1 ? i++ : i = 0;
        
},2000);
}
}

export default intervalCodes();