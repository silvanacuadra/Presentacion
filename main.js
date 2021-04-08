$(document).ready(function(){

    // MENU DESPLEGABLE

    const expand = $("#expand");
    const close = $("#close");
    const nav = $("#nav-responsive");
    const lista = $(".expand-nav")

    expand.on("click", () => {
        nav.toggleClass("hidden");
    });
    
    close.on("click", () => {
        nav.toggleClass("hidden");
    });

    lista.on("click", () => {
        nav.toggleClass("hidden");
    });

    // FILTRO DE ELEMENTOS

    // Mostrar los trabajos según categoría seleccionada
   
    $(".filter").on("click", function() {
        let filterSelected = $(this).attr("category");

        $(".one-work").hide();
        $(".one-work[category='"+filterSelected+"']").show();
    });

     // Mostrar todos los trabajos al presionar "TODOS"

     $(".filter[category='Todos']").on("click", () => {
        $(".one-work").show();
    });   
});


