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
    valor:"SUBA_CENTRO",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"SUBA ORIENTAL",
    valor:"SUBA_ORIENTAL",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"ENGATIVA CENTRO",
    valor:"ENGATIVA_CENTRO",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"ENGATIVA CALLE 80",
    valor:"ENGATIVA_CALLE_80",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"FONTIBON MONTEVIDEO",
    valor:"FONTIBON_MONTEVIDEO",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"EL CARMEN FONTIBON",
    valor:"EL_CARMEN_FONTIBON",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"BRASILIA",
    valor:"BRASILIA",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"BETANIA",
    valor:"BETANIA",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"METROVIVIENDA",
    valor:"METROVIVIENDA",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  },{
    nombre:"EL RECREO",
    valor:"EL_RECREO",
    origen:"",
    destino: "",
    distancia: "",
    duracionHoraPico: "",
    duracionHoraValle: "",
    lugaresInteres:[""],
    request:{
    origin: new google.maps.LatLng(4.761926, -74.037345), 
    destination: new google.maps.LatLng(4.628005, -74.065358),
    provideRouteAlternatives: false,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    }
  }
];

/*1.VERBENAL
2.SUBA CENTRO
3.SUBA ORIENTAL
4.ENGATIVA CENTRO
5.ENGATIVA CALLE 80
6.FOTIBON - MONTEVIDEO
7.EL CARMEN FONTIBON
8.BRASILIA
9.BETANIA
10.METROVIVIENDA
11.EL RECREO*/