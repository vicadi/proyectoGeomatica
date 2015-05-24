$(document).ready(function(){
  if(window.location.pathname=="/rutas/verRutas"){
    google.maps.event.addDomListener(window, 'load', initialize('mapaVerRutas'));
  }
  if(window.location.pathname=="/rutas/buscarRutas"){
    google.maps.event.addDomListener(window, 'load', initialize('mapaBuscarRutas'));
    $("#buscarRutas #checkBarrio").on("click",function(){
      if($(this).is(':checked')){
        $("#buscarRutas #select #selectLocalidades").css("display","none");
        $("#buscarRutas #select #selectBarrios").css("display","inherit");
        $("#buscarRutas #checkLocalidad").attr("checked",false);
      }else{
        $("#buscarRutas #select #selectLocalidades").css("display","inherit");
        $("#buscarRutas #select #selectBarrios").css("display","none");
        $("#buscarRutas #checkLocalidad").attr("checked",true);
      }
    }); 
    $("#buscarRutas #checkLocalidad").on("click",function(){
      if($(this).is(':checked')){
        $("#buscarRutas #select #selectBarrios").css("display","none");
        $("#buscarRutas #select #selectLocalidades").css("display","inherit");
        $("#buscarRutas #checkBarrio").attr("checked",false);
      }else{
        $("#buscarRutas #select #selectBarrios").css("display","inherit");
        $("#buscarRutas #select #selectLocalidades").css("display","none");
        $("#buscarRutas #checkBarrio").attr("checked",true);
      }
    }); 
  }
  if(window.location.pathname=="/rutas/exposicion"){
    var Page = (function() {        
      var config = {
          $bookBlock : $( '#bb-bookblock' ),
          $navNext : $( '#bb-nav-next' ),
          $navPrev : $( '#bb-nav-prev' ),
          $navFirst : $( '#bb-nav-first' ),
          $navLast : $( '#bb-nav-last' )
        },
        init = function() {
          config.$bookBlock.bookblock( {
            speed : 800,
            shadowSides : 0.8,
            shadowFlip : 0.7
          } );
          initEvents();
        },
        initEvents = function() {          
          var $slides = config.$bookBlock.children();
          // add navigation events
          config.$navNext.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'next' );
            return false;
          } );
          config.$navPrev.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'prev' );
            return false;
          } );
          config.$navFirst.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'first' );
            return false;
          } );
          config.$navLast.on( 'click touchstart', function() {
            config.$bookBlock.bookblock( 'last' );
            return false;
          } );          
          // add swipe events
          $slides.on( {
            'swipeleft' : function( event ) {
              config.$bookBlock.bookblock( 'next' );
              return false;
            },
            'swiperight' : function( event ) {
              config.$bookBlock.bookblock( 'prev' );
              return false;
            }
          } );
          // add keyboard events
          $( document ).keydown( function(e) {
            var keyCode = e.keyCode || e.which,
              arrow = {
                left : 37,
                up : 38,
                right : 39,
                down : 40
              };

            switch (keyCode) {
              case arrow.left:
                config.$bookBlock.bookblock( 'prev' );
                break;
              case arrow.right:
                config.$bookBlock.bookblock( 'next' );
                break;
            }
          } );
        };
        return { init : init };
    })();
    Page.init();
  }
})

//Ver mapa Bogota
function initialize(div) {
  var mapOptions = {
    center: { lat: 4.408045, lng: -74.155375},
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById(div),
      mapOptions);
}