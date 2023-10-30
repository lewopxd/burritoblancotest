 

function p_juego_button(index){

  
 const iframe = document.getElementById("framePuzzle");

 if(index==1){
    //window.open("./puzzle/index.html?imgId=0", "_blank");
    
 iframe.src = "./puzzle/index.html?imgId=0";

 }
 if(index==2){
   iframe.src = "./puzzle/index.html?imgId=1";
   
 }
 if(index==3){
   iframe.src = "./puzzle/index.html?imgId=2";
 }

 if(index==5){
   iframe.src = "./puzzle/index.html?random=true";
 }


 var juego_handler = document.getElementById("pg-juego-puzzle-handler");
 juego_handler.style.display = "block";
 juego_handler.style.zIndex = "50003";
 juego_handler.style.visibility = "visible";

 
 var ccc = document.getElementById("contenedor-delante2");
 ccc.style.opacity ="0";
 ccc.style.zIndex = "-50003";

}


function juego_puzzle_button_back(){

   const iframe = document.getElementById("framePuzzle");
   
   var juego_handler = document.getElementById("pg-juego-puzzle-handler");
   juego_handler.style.zIndex = "-50003";
    juego_handler.style.visibility = "hidden";
    juego_handler.style.display = "none";

    
    var ccc = document.getElementById("contenedor-delante2");
    ccc.style.opacity ="1"; 
    ccc.style.zIndex = "50003";
   
    iframe.src = "";
    



}