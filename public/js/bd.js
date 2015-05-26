var rutas=[
  { 
    nombre:"VERBENAL",
    valor:"VERBENAL",
    origen:"Calle 120 Carrera 7",
    destino: "Carrera 7 Calle 40",
    distancia: "100 km",
    duracionHoraPico: "1 hora 30 minutos",
    duracionHoraValle: "50 minutos",
    lugaresInteres:["Biblioteca sjkfsd", "CAI dkjhfsd", "Sede lskjfskd"],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    waypoints: [
      { 
        location: new google.maps.LatLng(4.706635, -74.053643),
        stopover:true
      },{ 
        location:new google.maps.LatLng(4.674281, -74.047535),
        stopover:false
      },{  
        location:new google.maps.LatLng(4.654789, -74.055392),
        stopover:true
      }],
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"SUBA CENTRO",
    valor: "SUBA_CENTRO",
    origen:"Carrera 120 Calle 50 sur",
    destino: "Carrera 7 Calle 40",
    distancia: "130 km",
    duracionHoraPico: "1 hora 40 minutos",
    duracionHoraValle: "1 hora",
    lugaresInteres:["sjkfsd", "dkjhfsd", "lskjfskd"],
    request:{
    origin: new google.maps.LatLng(4.674281, -74.047535), 
    destination: new google.maps.LatLng(4.643828, -74.187535),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  }
];

var barrios=[
  {nombre:"ALFEREZ REAL", valor: "ALFEREZ_REAL", rutas:[{nombre:"VERBENAL",valor:"VERBENAL"}]},
  {nombre:"AMERICAS CENTRAL", valor:"AMERICAS_CENTRAL", rutas:[{nombre:"SUBA CENTRO",valor:"SUBA_CENTRO"}]},
  {nombre:"AMERICAS OCCIDENTAL I, II Y III ETAPA", valor:"AMERICAS_OCCIDENTAL", rutas:[{nombre:"VERBENAL",valor:"VERBENAL"},
    {nombre:"SUBA CENTRO",valor:"SUBA_CENTRO"}]}
];

var localidades=[
  {nombre:"SUBA", valor: "SUBA", rutas:[{nombre:"VERBENAL",valor:"VERBENAL"}]},
  {nombre:"BOSA", valor:"BOSA", rutas:[{nombre:"SUBA CENTRO",valor:"SUBA_CENTRO"}]},
  {nombre:"USAQUEN", valor:"USAQUEN", rutas:[{nombre:"VERBENAL",valor:"VERBENAL"},
    {nombre:"SUBA CENTRO",valor:"SUBA_CENTRO"}]}
];