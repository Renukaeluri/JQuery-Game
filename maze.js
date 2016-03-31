$(function(){
    var player = '<div id="player"></div>';
    $("#map").append(player);
    
    
    $(document).keydown(function(e){
        // alert(e.keyCode);
        
        var position = $("#player").position();
      
        switch(e.keyCode){
                
            case 37:    //left
                $("#player").css('left', position.left-50 + 'px');  //position.left: most recent position and depending on way we are going to move,  add or subtract 
                break;
                
            case 38:    //up
                 $("#player").css('top', position.top- 50 + 'px');
                break;
                
            case 39:
                 $("#player").css('left', position.left + 50 + 'px');
                break;
                
            case 40: 
                 $("#player").css('top', position.top + 50 + 'px');
                break;          //position.top+20 is adding and px is appending
        }
    });
    
});