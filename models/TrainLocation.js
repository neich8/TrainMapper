var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TrainLocationSchema = new Schema ({
  direction: String,
  timeStamp: Date,
  lat: Number,
  lng: Number,
  route: String,
  rn: Number,
  nextStop: String,
  arrivalTime: Date
});

module.exports = mongoose.model('TrainLocations', TrainLocationSchema)

