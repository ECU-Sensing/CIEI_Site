const mapsKey = "AIzaSyCdi64dltyurMzy_QJWr_kwBGOvZ1-ShK4"
// The location of ecu
const ecu = { lat: 35.605124, lng:  -77.365271 }
const ecu_info = {
  name: "East Carolina University", 
  loc: { lat: 35.605124, lng:  -77.365271 },
}
const esdn_map = {
    scitech: { 
      name: "East Carolina University - Science and Technology Bldg",
      loc:  { lat: 35.605124, lng:  -77.365271 },
      coverage_area: 5000,
      icon: "assets/icons/icon_tower.png",
      status: 'Online',
    },
    brody: {
      name: "East Carolina University - Brody School of Medicine",
      loc: { lat: 35.609626, lng:  -77.402157 },
      coverage_area: 7500,
      icon: "assets/icons/icon_tower.png",
      status: 'Offline',
    },
    seagull: {
      name: "YMCA - Camp Seagull & Camp Seafarer",
      loc:  { lat: 34.994108, lng: -76.854844 },
      coverage_area: 10000,
      icon: "assets/icons/icon_tower.png",
      status: 'Online',
    }
};

// Initialize and add the map
function initMap() {

  // The map, centered at ecu
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: ecu,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });

  var markers = [];
  // Create markers.
  for (let point in esdn_map) {
    
    const marker = new google.maps.Marker({
        position: esdn_map[point].loc,
        icon: esdn_map[point].icon,
        map: map,
    });

    marker.addListener("mouseover", () =>{
      const content =  '<strong><u>' + esdn_map[point].name + '</strong></u>' + '<br>Status: '+ esdn_map[point].status + '<br>Latitude: ' + esdn_map[point].loc.lat + '<br>Longitude: ' + esdn_map[point].loc.lng ;
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
      window.setTimeout(function() {infoWindow.close(map, marker);},5000);
    });

    marker.addListener('click',function() {
      var pos = map.getZoom();
      map.setZoom(12);
      map.setCenter(marker.getPosition());
      window.setTimeout(function() {map.setZoom(pos);},5000);
    });

    const coverage_circle = new google.maps.Circle({
        strokeColor: "#9842f5",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#9842f5",
        fillOpacity: 0.15,
        map,
        center: esdn_map[point].loc,
        radius: esdn_map[point].coverage_area
    });
    markers.push(marker);
  };
  
  new MarkerClusterer({markers,map})
}

window.initMap = initMap;