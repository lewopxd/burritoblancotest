// El código JS es para el funcionamiento de los botones
// Disfruten la animación

var is_firstClick = true;
let currentPosition3 = 0;
let currentPosition2 = 0;
let currentPosition1 = 0;


var index_item = 0;
var last_index_item=0;
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

  if(!is_firstClick){
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

  index_item=1;
  cambiarSubrayado(document.getElementById("item1"));

  manageIndex(index_item);
 
}

function click_item_2() {
  index_item=2;
  cambiarSubrayado(document.getElementById("item2"));

 manageIndex(index_item);

   
}


function click_item_3() {
  index_item=3;
  cambiarSubrayado(document.getElementById("item3"));
manageIndex(index_item);
}

function click_item_4() {
  index_item=4;
  cambiarSubrayado(document.getElementById("item4"));
 manageIndex(index_item);
}

function click_item_5() {
  index_item = 5;
  cambiarSubrayado(document.getElementById("item5"));
  manageIndex(index_item);
}

function manageIndex(index){
  if(is_firstClick){
  movem();
  is_firstClick = false;
  }
 
  
  console.log("item: "+index_item+"   last: "+last_index_item);
  console.log( Math.abs(100*(index_item-last_index_item)) + "vw");
  if(index_item>last_index_item){
    //animacion a la izquierda
    moverMontana();
       }else if(index_item<last_index_item){
        //animacion a la derecha
        moverMontana_der();
       }else if(index_item==last_index_item){
       //no hacear nada
       }
    
     //despues de animar, establecer el ultimo index
     last_index_item=index_item;

    
}


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
  montana3.style.setProperty("--index-dif3", Math.abs(100*(index_item-last_index_item))+ "vw");
  montana3.classList.add("mover");
  currentPosition3 -= Math.abs(100*(index_item-last_index_item));
  



  montana2.classList.remove("mover");
  montana2.classList.remove("mover_der");
  void montana2.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana2.style.setProperty("--current2", currentPosition2 + "vw");
  montana2.style.setProperty("--index-dif2", Math.abs(50*(index_item-last_index_item)) + "vw");
  montana2.classList.add("mover");
  currentPosition2 -= Math.abs(50*(index_item-last_index_item));

  montana1.classList.remove("mover");
  montana1.classList.remove("mover_der");
  void montana1.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana1.style.setProperty("--current1", currentPosition1 + "vw");
  montana1.style.setProperty("--index-dif1", Math.abs(25*(index_item-last_index_item)) + "vw");
  montana1.classList.add("mover");
  currentPosition1 -= Math.abs(25*(index_item-last_index_item));

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
  montana3.style.setProperty("--index-dif3", Math.abs(100*(index_item-last_index_item)) + "vw");
  montana3.classList.add("mover_der");
  currentPosition3 += Math.abs(100*(index_item-last_index_item));




  montana2.classList.remove("mover_der");
  montana2.classList.remove("mover");

  void montana2.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana2.style.setProperty("--current2", currentPosition2 + "vw");
  montana2.style.setProperty("--index-dif2", Math.abs(50*(index_item-last_index_item)) + "vw");
  montana2.classList.add("mover_der");
  currentPosition2 += Math.abs(50*(index_item-last_index_item));

  montana1.classList.remove("mover_der");
  montana1.classList.remove("mover");
  void montana1.offsetWidth;  // Truco para forzar un reflow y reiniciar la animación
  montana1.style.setProperty("--current1", currentPosition1 + "vw");
  montana1.style.setProperty("--index-dif1", Math.abs(25*(index_item-last_index_item)) + "vw");
  montana1.classList.add("mover_der");
  currentPosition1 += Math.abs(25*(index_item-last_index_item));

}



