// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson" ;

 
// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  
  console.log(data);
  for (var i = 0; i < data.features.length; i++) {
    console.log(data.features[i].geometry);

    
    L.circle([data.features[i].geometry.coordinates[1],data.features[i].geometry.coordinates[0]], {
      
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: (400 * data.features[i].properties.mag)
    }).bindPopup(data.features[i].properties.mag).openPopup().addTo(myMap);
   
    //var popup = L.popup();
    //function onMapClick(e) {
       // popup
            //.setLatLng(e.latlng)
            //.setContent("Magnitude: ")
           // .openOn(myMap);
        //console.log(e);
    //}
    
    //myMap.on('click', onMapClick);
    //var legend = L.control({position: 'bottomright'});

//legend.onAdd = function (map) {

    //var div = L.DomUtil.create('div', 'info legend'),
    //grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    //labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    //for (var i = 0; i < grades.length; i++) {
        //div.innerHTML +=
            //'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
           // grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//}

//return div;
};

legend.addTo(map);
  


});

