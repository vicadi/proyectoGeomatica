//Variables
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var valor;

$(document).ready(function(){
  if(window.location.pathname=="/rutas/verRutas"){  
    for(var i=0, j=rutas.length; i<j; i++){
      $('#selectVerRuta').append('<option value='+rutas[i].valor+'>'+rutas[i].nombre+'</option>');
    }
    valor=$(document).getUrlParam("valor");
    if(valor!=="")
      seleccionarRuta(valor);
    var seleccion=$('#selectVerRuta option:selected').val();
    initialize("mapaVerRutas");    
    if(seleccion!=="none"){
      pintarRuta(seleccion);
      $("#detallesRuta").css("display","inherit");
    }
    valor="none";
    $(document).on("change","#selectVerRuta",function(){
      seleccion=$('#selectVerRuta option:selected').val();
      if(seleccion==="none"){
        $("#detallesRuta").css("display","none");
        initialize("mapaVerRutas");
      }else{
        $("#detallesRuta").css("display","inherit");
        pintarRuta(seleccion);
      }
    });
  }
  if(window.location.pathname=="/rutas/buscarRutas"){
    for(var i=0, j=localidades.length; i<j;i++){
      $("#buscarRutas #select #selectLocalidades").append('<option value='+localidades[i].valor+'>'+localidades[i].nombre+'</option>');
    }    
    for(var i=0, j=barrios.length; i<j;i++){
      $("#buscarRutas #select #selectBarrios").append('<option value='+barrios[i].valor+'>'+barrios[i].nombre+'</option>');
    }
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
    $(document).on("change","#selectLocalidades",function(){
      $("#buscarRutas #listaResultado ul").empty();
      var seleccionLocalidad = $('#selectLocalidades option:selected').val();
      if(seleccionLocalidad==="none"){
        $("#buscarRutas #listaResultado p").css("display","none");
        $("#buscarRutas #listaResultado ul").append("<li>Seleccione una Localidad</li>");
      }else{
        $("#buscarRutas #listaResultado p").css("display","inherit");
        for(var i=0, j=localidades.length;i<j;i++){
          if(seleccionLocalidad===localidades[i].valor){
            for(var k=0, l=localidades[i].rutas.length;k<l;k++){
              $("#buscarRutas #listaResultado ul").append("<li><a class='ruta' href='javascript:void(0);' valor='"
                +localidades[i].rutas[k].valor+"'>"+localidades[i].rutas[k].nombre+"</a></li>");  
            }
            i=localidades.length;
          }
        }  
      }    
    });
    $(document).on("change","#selectBarrios",function(){
      $("#buscarRutas #listaResultado ul").empty();
      var seleccionBarrios = $('#selectBarrios option:selected').val();
      if(seleccionBarrios==="none"){
        $("#buscarRutas #listaResultado p").css("display","none");
        $("#buscarRutas #listaResultado ul").append("<li>Seleccione un Barrio</li>");
      }else{
        $("#buscarRutas #listaResultado p").css("display","inherit");
        for(var i=0, j=barrios.length;i<j;i++){
          if(seleccionBarrios===barrios[i].valor){
            for(var k=0, l=barrios[i].rutas.length;k<l;k++){
              $("#buscarRutas #listaResultado ul").append("<li><a class='ruta' href='javascript:void(0);' valor='"+
                barrios[i].rutas[k].valor+"'>"+barrios[i].rutas[k].nombre+"</a></li>");  
            }
            i=barrios.length;
          }
        }  
      }
    });
    $("#buscarRutas #listaResultado").on('click', 'a.ruta',function(){
      document.location.href = "/rutas/verRutas?valor="+$(this).attr("valor");
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
function seleccionarRuta(valor){
  $("#selectVerRuta option[value="+ valor +"]").attr("selected",true);
}
function pintarRuta(seleccion){
  for(var i=0, j=rutas.length; i<j; i++){
    if(seleccion===rutas[i].valor){
      var request = rutas[i].request;
      repintar(request);
      $("#detallesRuta #valores #nombre").text(rutas[i].nombre);
      $("#detallesRuta #valores #duracionHoraPico").text(rutas[i].duracionHoraPico);
      $("#detallesRuta #valores #duracionHoraValle").text(rutas[i].duracionHoraValle);
      $("#detallesRuta #valores #origen").text(rutas[i].origen);
      $("#detallesRuta #valores #destino").text(rutas[i].destino);
      $("#detallesRuta #valores #distancia").text(rutas[i].distancia);
      var lugares;
      for(var k=0, l=rutas[i].lugaresInteres.length; k<l; k++){
        if(k===0){
          $("#detallesRuta #valores #lugaresInteres").html(rutas[i].lugaresInteres[k]);
        }else{
          $("#detallesRuta #valores #lugaresInteres").html(lugares+"<br>"+rutas[i].lugaresInteres[k]);
        }
        lugares = $("#detallesRuta #valores #lugaresInteres").html();
      }
      i=rutas.length;
    }
  }
}