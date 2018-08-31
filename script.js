$(document).ready(function(){
    
 $(".slide-button-up").on("click", function() {

  
  $("#lead-banner").slideToggle(1000, function(){
   alert("animation complete");
  });
 });
       
   });
   
