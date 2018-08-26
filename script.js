var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].oneclick = function() {
  
    if(wrapped) {
        $("section").unwrap();
        wrapped = false;
        button.text("wrap");
    } 
    
    else
    
    {
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("unwrap");
    }
};
