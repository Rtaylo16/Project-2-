
var express = require('express');
var exphbs = require("express-handlebars");
var app = express();
var db = require('./models');
var PORT = 8888;
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
// var connection = require('./config/connection');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'fee7a3c135dc44e69557d6eb151a4ef5',
  secret: 'b8a00147732d4495864e25cba6b5ff66'
});
 

app.engine("handlebars", exphbs({ defaultLayout: "main",   handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



 app.get('/', function (req, res){
  spotify
  .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
  .then(function (data) {
      for (let i = 0; i < data.tracks.items.length; i++) {
          var track = data.tracks.items[i].track.name;
        // console.log(track)
      };
      
      for (let i = 0; i < data.tracks.items.length; i++) {
          var artist = data.tracks.items[i].track.artists[0].name;

      };
  
      res.render('playlist', {track: [track]});
 
  });
 })


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});