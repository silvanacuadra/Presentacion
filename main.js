const expand = document.querySelector("#expand");
const close = document.querySelector("#close");
const nav = document.querySelector("#nav-responsive");
const lista = document.querySelectorAll(".expand-nav");
const filtros = document.querySelectorAll(".filter");
const work = document.querySelectorAll(".one-work");

// MENU DESPLEGABLE

expand.onclick = () => nav.classList.toggle("hidden");

close.onclick = () => nav.classList.toggle("hidden");

for (let elemento of lista) {
    elemento.onclick = () => nav.classList.toggle("hidden");
}

// FILTRO DE PROYECTOS

for (let boton of filtros) {
    boton.onclick = () => {
        for (let proyecto of work) {
            if (boton.dataset.categoria === proyecto.dataset.categoria) {
                proyecto.classList.remove("hidden");
            }
            else if (boton.dataset.categoria === "Todos") {
                proyecto.classList.remove("hidden");
            }
            else {
                proyecto.classList.add("hidden");
            }
        }
    }
}


