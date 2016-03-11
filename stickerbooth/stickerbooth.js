var angle = 0;
var count = 3;

$(document).ready(function(){

  CameraTool.initCameraOn("camera");

  $("#capture-button").click(capture);

  $( ".sticker" ).draggable({
    cursor: 'move',
    appendTo: 'body',
    helper: 'clone'
  });

  $("#overlay").droppable({
    drop: function(event,ui){
        var overlayleft = $("#overlay").offset().left;
        var overlaytop = $("#overlay").offset().top;
        $(ui.draggable).clone().css({"left": ui.position.left-overlayleft, "top": ui.position.top-overlaytop, "position":"absolute"}).appendTo(this);
        }
  });

  $("#overlay").on("click",".sticker",function() { //.click is not working on dynamically added object
                  $(".sticker").removeClass("selected");
                  $(this).addClass("selected");
                  });

  $("#overlay").click(function(e){
      if(e.target==this){
        $(".sticker").removeClass("selected");
      }
  });

  $(document).keypress(function(e) {
      if(e.keyCode == 37 && !e.shiftKey) {
          $( ".selected" ).animate({ "left": "-=2px"},10);
      }
      if(e.keyCode == 39 && !e.shiftKey) {
          $( ".selected" ).animate({ "left": "+=2px" },10);
      }
      if(e.keyCode == 38 && !e.shiftKey) {
          $( ".selected" ).animate({ "top": "-=2px" },10);
      }
      if(e.keyCode == 40 && !e.shiftKey) {
          $( ".selected" ).animate({ "top": "+=2px" },10);
      }
      if(e.keyCode == 37 && e.shiftKey) {
          angle-=3;
          $( ".selected" ).css({ transform: "rotate("+angle+"deg)" });
      }
      if(e.keyCode == 39 && e.shiftKey) {
          angle+=3;
          $( ".selected" ).css({ transform: "rotate("+angle+"deg)" });
      }
      if(e.keyCode == 38 && e.shiftKey) {
          $( ".selected" ).animate({ "width": "+=2%" });
      }
      if(e.keyCode == 40 && e.shiftKey) {
          $( ".selected" ).animate({ "width": "-=2%" });
      }
      if(e.keyCode == 46){
          $( ".selected" ).remove();
      }
  });
});

function capture(){
    if(count==0){
        CameraTool.hideCamera();
        CameraTool.captureTo("photo");
        $("#countdown").html("");
    }
    else{
    $("#countdown").html(count);
    count-=1;
    setTimeout("capture()",1000);
  }
}
