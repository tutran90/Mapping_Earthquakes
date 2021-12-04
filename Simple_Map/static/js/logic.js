// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. Section 13.3
let map = L.map('mapid').setView([36.1733, -120.1794], 4);

// Create the map object with center at the San Francisco airport. Section 13.4.3
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//Changing the coordiantes so it focuses on LA for Section 13.4.1:
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [40.6413, -73.7781],
    [36.1263, -86.6774],
    [30,1975, -97.6664],
    [44.6777, -79.6248]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4, 
    opacity: 0.5,
    dashArray: '20,15',
    lineJoin: 'sqaure'
  }).addTo(map);

// Get data from cities.js
let cityData = cities;

//  Add a marker to the map for Los Angeles, California. Section 13.4 
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: "orange",
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// Adding a circle to the map. When changing the point, you will erase the marker.
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "yellow"
//  }).addTo(map);

//Creating a title layer with LL quickstart doc. using tileLayer() method:
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//Creating a tile layer with mapbox style api:
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);