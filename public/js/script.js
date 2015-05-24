//Variables
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
//BD
  var rutas=[
    { 
      name:"Ruta1",
      request:{
      origin: new google.maps.LatLng(4.761926, -74.037345), 
      destination: new google.maps.LatLng(4.628005, -74.065358),
      waypoints: [
        { 
          location: new google.maps.LatLng(4.706635, -74.053643),
          stopover:true
        },{ 
          location:new google.maps.LatLng(4.674281, -74.047535),
          stopover:true
        },{  
          location:new google.maps.LatLng(4.654789, -74.055392),
          stopover:true
        }],
      provideRouteAlternatives: false,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
      }, 
      barrios:["verbenal","usaquen"]
    },{
      name:"Ruta2",
      request:{
      origin: new google.maps.LatLng(4.674281, -74.047535), 
      destination: new google.maps.LatLng(4.643828, -74.187535),
      provideRouteAlternatives: false,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
      }, 
      barrios:["margarita","estancia"]
    }
  ];

$(document).ready(function(){
  if(window.location.pathname=="/rutas/verRutas"){    
    initialize("mapaVerRutas");
    $(document).on("change","#selectVerRuta",function(){
      var request;
      if($('#selectVerRuta option:selected').val("ruta1")){
        request = rutas[0].request;
        repintar(request);
      }
      if($('#selectVerRuta option:selected').val("ruta2")){
        request = rutas[1].request;
        repintar(request);
      }
    });
  }
  if(window.location.pathname=="/rutas/buscarRutas"){
    initialize("mapaBuscarRutas");
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
  directionsDisplay = new google.maps.DirectionsRenderer();
  var bogota = new google.maps.LatLng(4.408045, -74.155375);
  var mapOptions = {
    zoom:10,
    center: bogota
  }
  map = new google.maps.Map(document.getElementById(div), mapOptions);
  directionsDisplay.setMap(map);
}

function repintar(request){
  directionsService.route(request, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}