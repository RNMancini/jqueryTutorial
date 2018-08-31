$(document).ready(function(){
    
var items = $("#point-of-sale li");

items.on("click", function(){
 $(this).find("p").slideToggle(500);
});
     
   });
   
