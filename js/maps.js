var map;
var ruta1;
var ruta2;
var ruta3;
var ruta4;
var ruta5;
var rutas = [];

function inicio() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(40.596500, 0.445445),
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.getElementById('mapa'),mapOptions);
  ruta1 = new google.maps.KmlLayer('https://sites.google.com/site/mapafqu/processo1/Indicaciones%20de%20Punto%202%20a%20Punto%203.kml?attredirects=0&d=1');
  ruta2 = new google.maps.KmlLayer('https://sites.google.com/site/mapafqu/processo1/Indicaciones%20de%20Sortida%20de%20lAjuntament%20a%20Arribada%20a%20lEsgle%CC%81sia.kml?attredirects=0&d=1');
  rutas.push(ruta1);
  rutas.push(ruta2);
  // rutas.push(ruta3);
  // rutas.push(ruta4);
  // rutas.push(ruta5);
};

google.maps.event.addDomListener(window, 'load', inicio);

function mostrarRutas (ruta) {
  for (var i = 0; i < rutas.length; i++){
    rutas[i].setMap(null);
  };
  ruta.setMap(map);
};