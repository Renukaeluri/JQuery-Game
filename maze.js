$(function(){
    var player = '<div id="player"></div>';
    $("#map").append(player);
    
    
    $(document).keydown(function(e){
        // alert(e.keyCode);
        
        var position = $("#player").position();
        console.log(position);
      
        switch(e.keyCode){
                
            case 37:    //left
                
                if(position.left>9){
                
                $("#player").css('left', position.left-50 + 'px');  //position.left: most recent position and depending on way we are going to move,  add or subtract 
                }
                    break;
                
            case 38:    //up
                if(position.top>81){
                 $("#player").css('top', position.top- 50 + 'px');
        }
                break;
                
            case 39:
                if(position.left<460)
                 $("#player").css('left', position.left + 50 + 'px');
                
                break;
                
            case 40: 
                if(position.top<181){
                 $("#player").css('top', position.top + 50 + 'px');
                }
                break;          //position.top+20 is adding and px is appending
        }
    });
    
});