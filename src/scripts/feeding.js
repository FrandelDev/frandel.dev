import logos from "../assets/img/logos-svg.json" assert{type: "json"}
const container = document.querySelector("#projects-container");
const currentFilter = document.querySelector("#current-filter");
const toolbox = document.querySelector("#toolbox");
const filterContainer = document.querySelector("#filter-container");
const filterOptionsContainer = document.querySelector("#filter-container-options");
const filterOptions = document.getElementsByClassName("filter-option");



const projectsData = [
    {
        gallery: ["https://i.postimg.cc/9Xd71KYN/tarker-api.jpg"],
        title: "tarker.booking-api ",
        shortDescription: "Una Api Web donde hago uso de  buenas practicas tanto en arquitectura como en escritura.",
        LongDescription: "En esta ocasión he desarrollado una API basada en una arquitectura empresarial utilizando el patron <b>CQRS</b>, controlando las excepciones y validando datos de entrada de forma fluida todo pensado en tener una arquitectura limpia y escalable.",
        tools: [
            logos.frameworks["dotnet-icon"],
            logos.languages["csharp-icon"],
            logos.languages["sql-icon"],
            logos.software["azure-icon"]
        ],
        repo: "https://github.com/FrandelDev/tarker.booking-api",
        deploy: "https://tarker-booking-api.azurewebsites.net"
    },
    {
        gallery: ["src/assets/img/default.svg"],
        title: "frandel.dev",
        shortDescription: "Gracias a este proyecto puedo presentar acertadamente mi trabajo a los demás.",
        LongDescription: "En este proyecto me he enfocado en que sea dinámico y rápido en su navegación permitiendo asi mostrar de manera eficiente mis proyectos personales y herramientas que utilizo sin scrollear demasiado en todo el cuerpo de la pagina de forma que todo el contenido este preciso en su sección especifica lo que brinda un fácil acceso a la misma.",
        tools: [
            logos.languages["js-icon"],
            logos.languages["css-icon"],
            logos.languages["html-icon"],
            logos.software["figma-icon"]
        ],
        repo: "https://github.com/FrandelDev/frandel.dev",
        deploy: "https://frandel.dev"
    },
    {
        gallery: ["src/assets/img/default.svg"],
        title: "tmdbPelis",
        shortDescription: "Consumo la api de TMDB para mostrar la cartelera de películas.",
        LongDescription: "for the future.",
        tools: [
            logos.languages["js-icon"],
            logos.languages["css-icon"],
            logos.languages["html-icon"]
        ],
        repo: "https://github.com/FrandelDev/tmdbPelis",
        deploy: "#"
    },
    {
        gallery: ["src/assets/img/default.svg"],
        title: "EF-CRUD",
        shortDescription: "Una APIREST usando minimal API",
        LongDescription: "for the future.",
        tools: [
            logos.frameworks["dotnet-icon"],
            logos.languages["csharp-icon"],
            logos.languages["sql-icon"],
        ],
        repo: "https://github.com/FrandelDev/dotnet-webapi-crud",
        deploy: "#"
    },
    {
        gallery: ["src/assets/img/default.svg"],
        title: "E-commerce",
        shortDescription: "",
        LongDescription: "for the future.",
        tools: [
            logos.languages["css-icon"],
            logos.languages["html-icon"]
        ],
        repo: "https://github.com/FrandelDev/eCommerce",
        deploy: "#"
    }
]



function addProjects(){
    projectsData.forEach(project => {
        container.innerHTML += `
    <article class="project">
            <figure>
                <img src="${project.gallery[0]}" alt="">
            </figure>
            <div class="info">
                <h5>${project.title}</h5>
            <p>${project.shortDescription}</p>
            <div class="tools">${project.tools.join('')}</div>
            </div>
        </article>
    `
    });   

    const projects = Array.from(document.querySelectorAll(".project"));
    
    projects.forEach(project => {
        project.addEventListener("click", function viewFullDescription(){
            document.querySelector("#projects-container").insertAdjacentHTML("afterbegin",`
            <div id='project-descriptor'>
                    <img src="./src/assets/img/close.svg"id="close">
                    <div id="description">
                        <h5>${projectsData[projects.indexOf(project)].title}</h5>
                        <div id="gallery">
                            <img src="${projectsData[projects.indexOf(project)].gallery[0]}" alt="">
                        </div>
                        <p>${projectsData[projects.indexOf(project)].LongDescription}</p>
                        <h6>Herramientas utilizadas</h6>
                        <div id="tools-detail">
                        ${
                            projectsData[projects.indexOf(project)].tools.map(tool => {
                                return `<div class="detail">
                                    ${tool}
                                    
                              <p>${tool.match(/title='(\w+\s?\w+?)'/)[1]}</p>
                              </div>`
                            }).join('')
                        }
                        </div>
                        <div id="links">
                            <a id="repo" href="${projectsData[projects.indexOf(project)].repo}" target="_blank">
                                <img src="https://img.shields.io/badge/GitHub-Ver%20repositorio-brightgreen" alt="Ver repositorio en GitHub">
                            </a>
                            <a id="deploy" href="${projectsData[projects.indexOf(project)].deploy}" target="_blank">Despliegue   
                                <img src="./src/assets/img/external-link.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            `);
        document.querySelector("#project-descriptor").addEventListener("click",removeFullViewDescription);

        function removeFullViewDescription(){
            document.querySelector("#project-descriptor").remove();
        }
        });
    });
}






function filterTools(filter){
    toolbox.innerHTML  = "";
    switch(filter){
        case "Software" : renderIcons(logos.software);
        break;
        case "OS" : renderIcons(logos.OS);
        break;
        case "Lenguajes" : renderIcons(logos.languages);
        break;
        case "Frameworks" : renderIcons(logos.frameworks);
        break;
        default: {
            renderIcons(logos.languages);
            renderIcons(logos.frameworks);
            renderIcons(logos.software);
            renderIcons(logos.OS);
        }
    }

    function renderIcons(obj){
        for(let item in obj){
            toolbox.innerHTML += `<div class="svg-container">${obj[item]}</div>`;
        }
        
    }
    

}




function addSigns(){
    var elements = Array.from(document.querySelectorAll("#toolbox .svg-container svg"));

elements.forEach(element => {

element.insertAdjacentHTML("beforebegin",`<span class="disabled">${element.getAttribute("title")}</span>`);

});

const names = Array.from(document.querySelectorAll("#toolbox .svg-container span"));

elements.forEach(element => {
element.addEventListener("click",()=>{
    names[elements.indexOf(element)].classList.add("activated");
});

element.addEventListener("mouseout",()=>{
    names[elements.indexOf(element)].classList.remove("activated");
});
});
}







function addTools(){
       filterTools()
       addSigns()
    for(let item of filterOptions){
        item.addEventListener("click",()=>{
            currentFilter.textContent = item.textContent;
            filterTools(currentFilter.textContent);
            addSigns();
        });
    } 
    filterContainer.addEventListener("click", () =>{
        filterOptionsContainer.classList.toggle("activated")
    });



}


export {addProjects,addTools};

