// constantes son la mejor eleccion nos aseguramos que 
// la variable no cambie. (.nombre hace referencia al 
// la clase nombre de p [<p class="nombre">FreeCodeCamp</p>])
const nombre = document.querySelector(".nombre");
// se define la funcion
// function nombreDeFuncion() {
    // que hacer
// }

// la funcion debe coincidir con lo declarado en html
// <button onclick="cambiaColor()"> de lo contrario no 
// funcionara
function cambiaColor(color) {
    // paso como valor el nombre del color y lo
    // concateno con el nombre que use en la variable
    // de css en :root
    nombre.style.color="var(--" + color + ")";
}