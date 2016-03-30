var trains = {};
var twoLocations = {};
$(function() {


    var map = L.map('map').setView([41.881832, -87.623177], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibmVpY2g4IiwiYSI6ImNpaWZjdGN6ejAxcnd2dG0xaGJzYWp0YXgifQ.EoP4i_9K3-FqZyO3H-zABQ'
    }).addTo(map);

  socket = io.connect();
  socket.on('trains', function (data) {
    console.log("receiving trains")
  });

});





