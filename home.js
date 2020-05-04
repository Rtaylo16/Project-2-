
var express = require('express');
var exphbs = require("express-handlebars");
var app = express();
// var connection = require('./config/connection');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'fee7a3c135dc44e69557d6eb151a4ef5',
  secret: 'b8a00147732d4495864e25cba6b5ff66'
});
 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//  app.get('/playlist', function(req,res){
//   spotify
//   .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
//   .then(function(data) {
//     console.dir(data);
//     res.render("playlist",{playlist:data});
    
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });
//  });


 app.get('/playlist', function (req, res){
  spotify
  .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
  .then(function (data) {
      for (let i = 0; i < data.tracks.items.length; i++) {
          var track = data.tracks.items[i].track.name;
        console.log(track)
      };
      
      for (let i = 0; i < data.tracks.items.length; i++) {
          var artist = data.tracks.items[i].track.artists[0].name;

      };
  
      res.render('playlist', {track: [track], track: [artist]});
 
  });
 })



console.log('Listening on 8888');
app.listen(8888);
