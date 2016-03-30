var express = require('express');
var router = express.Router();
var getLocations = require("../tasks/trains.js")
var Train = require("../models/TrainLocation")
// Middleware example
router.use(function timeLog(req, res, next) {
  console.log("requesting " + req.url)
  console.log('Time: ', Date.now());
  next();
});

router.get("/", function(req, res) {
  res.render('index', {title: "it works!", message: "Hello Friend"})
});

router.get("/ping", function(req, res) {
  res.json({ping: "success"})
})

router.get("/locations", function(req, res) {
  Train.find({route: "RED"}, function(err, trains){
    res.json(trains);
  });

});





module.exports = router;