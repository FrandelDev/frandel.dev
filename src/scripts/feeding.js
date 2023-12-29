import logos from "../assets/img/logos-svg.json" assert{type: "json"}

const tools = document.querySelector("#tools");
function addLanguages(){
tools.innerHTML += logos.languages["csharp-icon"];
tools.innerHTML += logos.languages["css-icon"];
tools.innerHTML += logos.languages["js-icon"];
tools.innerHTML += logos.languages["html-icon"];
tools.innerHTML += logos.languages["sql-icon"];
tools.innerHTML += logos.languages["dotnet-icon"];
}

export default addLanguages();

