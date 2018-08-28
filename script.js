$(document).ready(function(){
    
   
   $("section > h2").on("click", function() {
       
       $(this).animate({"width" : "500px", "height" : "100px"}, 4000, "linear", function(){
           alert("animation complete");
       });
       
   });
   
});