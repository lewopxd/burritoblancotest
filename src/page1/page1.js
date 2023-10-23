


function p2abrirEnlace_Instagram(){
    

// Obtén el elemento raíz (:root)
const root = document.documentElement;

// Obtén el valor de la variable CSS
var p2_instaURL = getComputedStyle(root).getPropertyValue("--instagram-burrito-URL");
     window.open(p2_instaURL, "_blank");

}