var p2_indx_menu=0;

function p2_button(p2_index){
 console.log("en pagina2: --->"+ p2_index);


 p2_indx_menu = p2_index;
 manageP2pages(p2_index);
}


function manageP2pages(p2__indx){
 
    const l2 = document.getElementById("p2-layout");
    l2.style.display = "none";

  
     
    console.log("---> here: "+ "p2-item"+p2_indx_menu+"-sub");
   const p2_new_page = document.getElementById("p2-item"+p2_indx_menu+"-sub");
   p2_new_page.style.display = "block";

   const p2_back = document.getElementById("p2-back");
   p2_back.style.display = "block";

}



function p2_button_back(){
   

    const p2_back = document.getElementById("p2-back");
    p2_back.style.display = "none";
  
   

    const p2_new_page = document.getElementById("p2-item"+p2_indx_menu+"-sub");
    p2_new_page.style.display = "none";

    const l2 = document.getElementById("p2-layout");
    l2.style.display = "grid";
}