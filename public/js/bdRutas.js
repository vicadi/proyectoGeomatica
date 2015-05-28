var rutas=[
  { 
    nombre:"VERBENAL",
    valor:"VERBENAL",
    origen:"Carrera 16 Calle 185",
    destino: "Carrera 7 Calle 40",
    distancia: "28,9 km",
    duracionHoraPico: "1 hora 30 minutos",
    duracionHoraValle: "50 minutos",
    lugaresInteres:["Biblioteca sjkfsd", "CAI dkjhfsd", "Sede lskjfskd","Hospital sijfsdjf"],
    request:{
    origin: new google.maps.LatLng(4.761927, -74.037359), 
    destination: new google.maps.LatLng(4.627385, -74.065534),
    waypoints: [
      { 
        location: new google.maps.LatLng(4.760259, -74.030095),
        stopover:true
      },{ 
        location:new google.maps.LatLng(4.743267, -74.033923),
        stopover:false
      },{  
        location:new google.maps.LatLng(4.716788, -74.039272),
        stopover:true
      },{  
        location:new google.maps.LatLng(4.667559, -74.047289),
        stopover:false
      },{  
        location:new google.maps.LatLng(4.644847, -74.073575),
        stopover:true
      }],
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  }},{
    nombre:"SUBA CENTRO",
    valor:"SUBA_CENTRO",
    origen:"Carrera 53 Calle 134",
    destino: "Carrera 13 Calle 42",
    distancia: "21,3 Km",
    duracionHoraPico: "1 Hora 10 minutos",
    duracionHoraValle: "55 minutos",
    lugaresInteres:["Biblioteca dskhdsf", "CAI skjhsfkj", "Sede sjklsdfj", "Hospital cvckkded"],
    request:{
    origin: new google.maps.LatLng(4.719958, -74.058428), 
    destination: new google.maps.LatLng(4.629808, -74.066839),
    waypoints: [
      { 
        location: new google.maps.LatLng(4.700399, -74.076914),
        stopover:true
      },{ 
        location:new google.maps.LatLng(4.672380, -74.074729),
        stopover:false
      },{  
        location:new google.maps.LatLng(4.653747, -74.086554),
        stopover:false
      },{  
        location:new google.maps.LatLng(4.652031, -74.065306),
        stopover:true
      }],
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"ENGATIVA CENTRO",
    valor:"ENGATIVA_CENTRO",
    origen:"Calle 72 Carrera 10",
    destino: "Carrera 13 Calle 40",
    distancia: "30.7 Km",
    duracionHoraPico: "1 hora 28 minutos",
    duracionHoraValle: "58 minutos",
    lugaresInteres:["Biblioteca skhjfsdjhf", "CAI skjhfhjsd", "Sede ppoijddd", "Hospital Engativa"],
    request:{
    origin: new google.maps.LatLng(4.710531, -74.124891), 
    destination: new google.maps.LatLng(4.629808, -74.066839),
    waypoints: [
      { 
        location: new google.maps.LatLng(4.702840, -74.109232),
        stopover:false
      },{ 
        location:new google.maps.LatLng(4.699443, -74.110106),
        stopover:true
      },{  
        location:new google.maps.LatLng(4.694975, -74.110377),
        stopover:false
      },{  
        location:new google.maps.LatLng(4.675539, -74.078880),
        stopover:true
      }],
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"BRASILIA",
    valor:"BRASILIA",
    origen:"Calle 69a sur Carrera 97c",
    destino: "Calle 41 Carrera 13",
    distancia: "38.6 Km",
    duracionHoraPico: "1 Hora 58 minutos",
    duracionHoraValle: "1 Hora 3 minutos",
    lugaresInteres:["Biblioteca Tintal","CAI Brasilia", "Sede Ciencias de la Salud", "Hospital Kennedy"],
    request:{
    origin: new google.maps.LatLng(4.633161, -74.200962), 
    destination: new google.maps.LatLng(4.629011, -74.066987),
    waypoints: [
      { 
        location: new google.maps.LatLng(4.637852, -74.192751),
        stopover:false
      },{ 
        location:new google.maps.LatLng(4.626692, -74.185244),
        stopover:true
      },{  
        location:new google.maps.LatLng(4.632096, -74.177601),
        stopover:true
      },{  
        location:new google.maps.LatLng(4.621394, -74.166098),
        stopover:false
      },{  
        location:new google.maps.LatLng(4.616404, -74.155978),
        stopover:true
      },{  
        location:new google.maps.LatLng(4.628297, -74.136355),
        stopover:true
      },{  
        location:new google.maps.LatLng(4.630939, -74.113257),
        stopover:false
      }],
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  }];