$(document).ready(function() {

  $("#owl-demo").owlCarousel({
  pagination: false,
  singleItem : true,
  autoPlay : 2000,
  mouseDrag : false,
  touchDrag : false,
  transitionStyle : "fadeUp"
  });


  var vague = $('#owl-demo').Vague({
    /*intensity:      0,      // Blur Intensity
    forceSVGUrl:    false,   // Force absolute path to the SVG filter,
    // default animation options
    animationOptions: {
      duration: 100,
      easing: 'linear' // here you can use also custom jQuery easing functions
    } */
  });

  $(function(){
    $("#overlay").hover(
    function() {
      $(".button").animate({"opacity": "1"}, 300),
      vague.animate(10,{duration:200, easing:'linear'})
    },
    function() {
      $(".button").animate({"opacity": "0"}, 300),
      vague.animate(0,{duration:200, easing:'linear'})
    });
  });

});
