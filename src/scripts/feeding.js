import logos from "../assets/img/logos-svg.json" assert{type: "json"}
const container = document.querySelector("#projects-container");

const projectsData = [
    {
        thumbnail: "https://i.postimg.cc/9Xd71KYN/tarker-api.jpg",
        title: "tarker.booking-api ",
        description: "Una Api Web donde hago uso de  buenas practicas tanto en arquitectura como en escritura.",
        tools: [
            logos.languages["dotnet-icon"],
            logos.languages["csharp-icon"],
            logos.languages["sql-icon"],
            logos.software["azure-icon"]
        ]
    },
    {
        thumbnail: "src/assets/img/default.svg",
        title: "frandel.dev",
        description: "Gracias a este proyecto puedo presentar acertadamente mi trabajo a los demás.",
        tools: [
            logos.languages["js-icon"],
            logos.languages["css-icon"],
            logos.languages["html-icon"],
            logos.software["figma-icon"]
        ]
    },
    {
        thumbnail: "src/assets/img/default.svg",
        title: "tmdbPelis",
        description: "Consumo la api de TMDB para mostrar la cartelera de películas.",
        tools: [
            logos.languages["js-icon"],
            logos.languages["css-icon"],
            logos.languages["html-icon"]
        ]
    },
    {
        thumbnail: "src/assets/img/default.svg",
        title: "EF-CRUD",
        description: "",
        tools: [
            logos.languages["dotnet-icon"],
            logos.languages["csharp-icon"],
            logos.languages["sql-icon"],
        ]
    },
    {
        thumbnail: 'src/assets/img/default.svg',
        title: "E-commerce",
        description: "",
        tools: [
            logos.languages["css-icon"],
            logos.languages["html-icon"]
        ]
    }
]
function addProjects(){
    projectsData.forEach(project => {
        container.innerHTML += `
    <article class="project">
            <figure>
                <img src="${project.thumbnail}" alt="">
            </figure>
            <div class="info">
                <h5>${project.title}</h5>
            <p>${project.description}</p>
            <div id="tools">${project.tools.join('')}</div>
            </div>
        </article>
    `
    });
    

}
export default addProjects();

