const navbar= document.querySelector(".navbar");
let prevscpos = window.scrollY;

window.addEventListener("scroll",
    function(){
         let currscpos= window.scrollY;
         if(prevscpos > currscpos){
            navbar.style.opacity = "1"; 
         }else {
            navbar.style.opacity = "0";
         }

         prevscpos = currscpos;
    }
);