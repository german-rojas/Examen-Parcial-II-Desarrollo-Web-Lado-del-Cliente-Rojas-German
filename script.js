console.log("Página cargada correctamente. Bienvenido a Librería Germán Rojas.");

let enlaceCatalogo = document.getElementById("link-catalogo");

if (enlaceCatalogo) {
    enlaceCatalogo.addEventListener("click", function() {
        alert("Estás a punto de salir de la librería para ver el catálogo de Hardware.");
    });
}