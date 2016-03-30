var express = require("express");
var app = express();
var index = require("./routes/index");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var getLocations = require("./tasks/trains");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trainMapper');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.use("/", index);

server.listen(3000);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


// io.on('connection', function (socket) {
//   getLocations(function(trains, err) {
//     if(err) {
//       console.log(err);
//     } else {
//       socket.emit("trains", trains);
//     }
//   })
  
// });

// var send = function(trains) {
//     io.sockets.emit('trains', trains);
// }

// var Train = require("./models/TrainLocation")
// var interval = setInterval(function() {
//   getLocations(function(trains, err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("sending and saving trainLocations");
//       for(var i = 0; i < trains.length; i++) {
//         console.log("saving" + trains[i])
//         var train = new Train (trains[i]);
//         train.save();
//       }
//     }
//   });
// }, 5000);