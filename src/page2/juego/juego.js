 

function p3_button(index){

 if(index==1){
    //window.open("./puzzle/index.html?imgId=0", "_blank");
    


    var juego_handler = document.getElementById("pg-juego-puzzle-handler");
    juego_handler.style.display = "block";
    juego_handler.style.zIndex = "50003";
    juego_handler.style.visibility = "visible";

    
    var ccc = document.getElementById("contenedor-delante3");
    ccc.style.display = "none";
 
  


 }
 if(index==2){
    window.open("./puzzle/index.html?imgId=1", "_blank");
 }
 if(index==3){
    window.open("./puzzle/index.html?imgId=2", "_blank");
 }

}