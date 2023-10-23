// El código JS es para el funcionamiento de los botones
// Disfruten la animación

var is_firstClick = true;
let currentPosition3 = 0;
let currentPosition2 = 0;
let currentPosition1 = 0;

 

var index_item = 0;
var last_index_item = 0;
window.addEventListener('load', function () {
  // Se ejecuta cuando todos los recursos (imágenes, estilos, etc.) han cargado completamente

  // Oculta el preloader
  var preloader = document.getElementById('preloader');


  // Espera 2 segundos antes de mostrar el contenido
  setTimeout(function () {
    preloader.style.display = 'none';
    var content = document.getElementById('content');
    content.style.display = 'block';
  }, 10); // 2000 milisegundos = 2 segundos
});





let counter = 0;
const timer = setInterval(() => {
  counter += 1;
}, 200);
const music = document.getElementById("music");
const buttonMute = document.getElementById("button-audio");
const signal = document.getElementById("audio-signal");
const activeAudio = () => {
  music.play();
  music.currentTime = counter / 5;
  clearInterval(timer);
  signal.remove();
};
buttonMute.addEventListener("click", () => {
  if (music.currentTime === 0) activeAudio();
  else music.muted = !music.muted;
  buttonMute.classList[music.muted ? "add" : "remove"]("muted");
});
signal.addEventListener("click", () => {
  activeAudio();
  buttonMute.classList.remove("muted");
});

const buttonFullScreen = document.getElementById("button-full");
buttonFullScreen.addEventListener("click", () => {
  const isActive = document.fullscreenElement;
  if (isActive) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
  buttonFullScreen.classList[!isActive ? "add" : "remove"]("full");
});

/*
 
screen.orientation.addEventListener("change", function(e) {
  // Do something on change
  
  if(!is_firstClick){
movem();
  }
});



visualViewport.addEventListener("resize", () => {
  if(!is_firstClick){
    movem();
      }
});
*/

window.addEventListener("resize", reportWindowSize);
function reportWindowSize() {
  const t = document.getElementById("nuevo-titulo");
   
  //cambiarTextoVacio();

  if (!is_firstClick) {
    if (window.innerWidth <= 640) {
      t.innerText = ("El Burrito Blanco");
    } else {
      t.innerText = ("El Burrito\nBlanco");

    }
  }
}

function cambiarSubrayado(elementoClicado) {
  const textos = document.querySelectorAll('.linea');

  // Quita la clase de subrayado de todos los textos
  textos.forEach(texto => {
    texto.classList.remove('subrayado');
  });

  // Aplica la clase de subrayado al texto clicado
  elementoClicado.classList.add('subrayado');
}



function moverBurrito() {
  const burrito = document.getElementById('burrito1');
  burrito.classList.add('mover');
}


function click_item_1() {

  index_item = 1;
  cambiarSubrayado(document.getElementById("item1"));

  manageIndex(index_item);

}

function click_item_2() {
  index_item = 2;
  cambiarSubrayado(document.getElementById("item2"));

  manageIndex(index_item);


}


function click_item_3() {
  index_item = 3;
  cambiarSubrayado(document.getElementById("item3"));
  manageIndex(index_item);
}

function click_item_4() {
  index_item = 4;
  cambiarSubrayado(document.getElementById("item4"));
  manageIndex(index_item);
}

function click_item_5() {
  index_item = 5;
  cambiarSubrayado(document.getElementById("item5"));
  manageIndex(index_item);
}

function manageIndex(index) {
  if (is_firstClick) {
    movem();
    const elementosLinea = document.querySelectorAll(".linea");

    elementosLinea.forEach(elemento => {
      elemento.style.pointerEvents = "auto";
    });

    var contenedorp2 = document.getElementById("contenedor-principal2");
    contenedorp2.style.display = "block";
    contenedorp2.classList.add("aparecerp2");

    var contenItems0 = document.getElementById("contenedorItems0");
    contenItems0.classList.add('animate');

  //  cambiarTextoVacio();
  cambiarTextoVacio2();


    if (window.innerWidth <= 640) {
    var contenedorit = document.getElementById("contenedorItems");
    // Agrega una clase para activar la animación
    contenedorit.classList.add("animatebg");

    
    }

  

    is_firstClick = false;
  }


  console.log("item: " + index_item + "   last: " + last_index_item);
  console.log(Math.abs(100 * (index_item - last_index_item)) + "vw");
  if (index_item > last_index_item) {
    //animacion a la izquierda
    moverMontana();
    ManagePagesLeft();

  } else if (index_item < last_index_item) {
    //animacion a la derecha
    moverMontana_der();
    ManagePagesRight();
  } else if (index_item == last_index_item) {
    //no hacear nada
  }




// cambiar el titulo a su valor

var el = document.getElementById("item"+""+index).querySelector(".pp");

// Lee el texto del elemento
var texto = el.textContent;

var  thistit = document.getElementById("tit-0");

thistit.textContent = texto;


 

if (window.innerWidth <= 640) {
   
  for (let xx = 1; xx <= 5; xx++) {    
      document.getElementById("item"+xx).classList.remove("activex");
    
  }
  document.getElementById("item"+index).classList.add("activex");
}
  


  //despues de animar, establecer el ultimo index
  last_index_item = index_item;

}


function cambiarTextoVacio2() {
  var elementosPP = document.querySelectorAll(".pp");

  elementosPP.forEach(function(elemento) {
    elemento.classList.add("animate"); // Reemplaza "tuClaseDeAnimacion" con el nombre de tu clase de animación
  });

  var imagenesEnLinea = document.querySelectorAll(".imgn");

// Recorre todas las imágenes y agrega la clase de animación
imagenesEnLinea.forEach(function(imagen) {
  imagen.classList.add("animate"); // Reemplaza "tuClaseDeAnimacion" con el nombre de tu clase de animación
});

}






// Llama a la función cuando se carga la página y cuando se redimensiona la ventana
 // Llama a la función al cargar la página
 

function movem() {


  const elemento = document.getElementById('contenedorItems');
  const distanciaAlBordeSuperior = -1 * elemento.getBoundingClientRect().top;
  const distanciaAlBordeIzquierdo = -1 * elemento.getBoundingClientRect().left;

  elemento.style.setProperty('--distanciaX', `${distanciaAlBordeIzquierdo}px`);
  elemento.style.setProperty('--distanciaY', `${distanciaAlBordeSuperior}px`);
  elemento.classList.add('animado');

  const contenedordelante = document.getElementById('contenedor-delante');
  contenedordelante.classList.add('animadox');

  const elementos_linea = document.querySelectorAll('.linea');

  elementos_linea.forEach(lin => {
    lin.classList.add('animado');
  });



  const nuevoTit = document.getElementById("contenedor-titulo");
  nuevoTit.classList.add("animado");


  const nuevoTitex = document.getElementById("nuevo-titulo");
  nuevoTitex.classList.add("animado");

  const t = document.getElementById("nuevo-titulo");
  const st = document.getElementById("nuevo-subtitulo");
  const at = document.getElementById("nuevo-autorTitulo");

  st.remove();
  at.remove();

  if (window.innerWidth <= 640) {
    t.innerText = ("El Burrito Blanco");
  } else {
    t.innerText = ("El Burrito\nBlanco");
  }

  moverBurrito();







}

function moverMontana() {
  
  const montana3 = document.getElementById("montanas_3");
  const montana2 = document.getElementById("montanas_2");
  const montana1 = document.getElementById("montanas_1");

  // Reiniciamos la animación eliminando y volviendo a agregar la clase
  montana3.classList.remove("mover");
  montana3.classList.remove("mover_der");
  void montana3.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana3.style.setProperty("--current3", currentPosition3 + "vw");
  montana3.style.setProperty("--index-dif3", Math.abs(100 * (index_item - last_index_item)) + "vw");
  montana3.classList.add("mover");
  currentPosition3 -= Math.abs(100 * (index_item - last_index_item));




  montana2.classList.remove("mover");
  montana2.classList.remove("mover_der");
  void montana2.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana2.style.setProperty("--current2", currentPosition2 + "vw");
  montana2.style.setProperty("--index-dif2", Math.abs(50 * (index_item - last_index_item)) + "vw");
  montana2.classList.add("mover");
  currentPosition2 -= Math.abs(50 * (index_item - last_index_item));

  montana1.classList.remove("mover");
  montana1.classList.remove("mover_der");
  void montana1.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana1.style.setProperty("--current1", currentPosition1 + "vw");
  montana1.style.setProperty("--index-dif1", Math.abs(25 * (index_item - last_index_item)) + "vw");
  montana1.classList.add("mover");
  currentPosition1 -= Math.abs(25 * (index_item - last_index_item));

}



function moverMontana_der() {

  const montana3 = document.getElementById("montanas_3");
  const montana2 = document.getElementById("montanas_2");
  const montana1 = document.getElementById("montanas_1");

  // Reiniciamos la animación eliminando y volviendo a agregar la clase
  montana3.classList.remove("mover_der");
  montana3.classList.remove("mover");
  void montana3.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana3.style.setProperty("--current3", currentPosition3 + "vw");
  montana3.style.setProperty("--index-dif3", Math.abs(100 * (index_item - last_index_item)) + "vw");
  montana3.classList.add("mover_der");
  currentPosition3 += Math.abs(100 * (index_item - last_index_item));




  montana2.classList.remove("mover_der");
  montana2.classList.remove("mover");

  void montana2.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana2.style.setProperty("--current2", currentPosition2 + "vw");
  montana2.style.setProperty("--index-dif2", Math.abs(50 * (index_item - last_index_item)) + "vw");
  montana2.classList.add("mover_der");
  currentPosition2 += Math.abs(50 * (index_item - last_index_item));

  montana1.classList.remove("mover_der");
  montana1.classList.remove("mover");
  void montana1.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana1.style.setProperty("--current1", currentPosition1 + "vw");
  montana1.style.setProperty("--index-dif1", Math.abs(25 * (index_item - last_index_item)) + "vw");
  montana1.classList.add("mover_der");
  currentPosition1 += Math.abs(25 * (index_item - last_index_item));

}



function ManagePagesLeft(){
  const pag = document.getElementById("pagina"+index_item);
  const lastpag = document.getElementById("pagina"+last_index_item);
 
  console.log("agregué el elemento");

  pag.style.display = "block";
  

  pag.classList.remove("SalePagina-toRight");
  pag.classList.remove("EntraPagina-toRight");
  pag.classList.remove("EntraPagina-toLeft");
  pag.classList.remove("SalePagina-toLeft");
  void pag.offsetWidth; 
  pag.classList.add("EntraPagina-toLeft");

  if((last_index_item > 0 )){
    lastpag.style.display = "block";
    lastpag.classList.remove("SalePagina-toRight");
    lastpag.classList.remove("EntraPagina-toRight");
    lastpag.classList.remove("EntraPagina-toLeft");
    lastpag.classList.remove("SalePagina-toLeft");
  
    void lastpag.offsetWidth;    
   lastpag.classList.add("SalePagina-toLeft");

   
   
  }
 
  
}



function ManagePagesRight(){
  const pag = document.getElementById("pagina"+index_item);
  const lastpag = document.getElementById("pagina"+last_index_item);
 
  pag.style.display = "block";
  lastpag.style.display = "block";
  console.log("agregué el elemento");
  
  pag.classList.remove("SalePagina-toRight");
  pag.classList.remove("EntraPagina-toRight");
  pag.classList.remove("EntraPagina-toLeft");
  pag.classList.remove("SalePagina-toLeft");
  void pag.offsetWidth; 

  pag.classList.add("EntraPagina-toRight");

 
  lastpag.classList.remove("SalePagina-toRight");
  lastpag.classList.remove("EntraPagina-toRight");
  lastpag.classList.remove("EntraPagina-toLeft");
  lastpag.classList.remove("SalePagina-toLeft");

  void lastpag.offsetWidth;      
  lastpag.classList.add("SalePagina-toRight");

   
    
 
  
    

}



function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};