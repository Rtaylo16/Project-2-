var path = require ('path');

var db = require('../models');

module.exports = function(app) {

    app.get("/table", function(req, res) {
    db.Track.findAll({})
    .then(function(results){
      console.log(results);
      
      res.render('playlist', {track: results})})
    });
  
    app.get("/", function(req, res) {
      res.render('create')
    });
  };

