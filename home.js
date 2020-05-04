// $(document).ready(function() {
var express = require('express');
var exphbs = require("express-handlebars");
// var $ = require('jquery');
var app = express();
// var connection = require('./config/connection');


// var request = require("request");
// var user_id = "justin";
// var playlist_url = "https://api.spotify.com/v1/users/" + user_id + "/playlists";

// request({url:playlist_url, header})


// app.get('/playlists/:playlist_id', function(req, res) {
//    connection.query("SELECT * FROM playlists WHERE playlistID = ?", req.params.playlist_id, function(err, result){
//     if (err) throw err;
    
//      res.send(result);
//    })
 

// });

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'fee7a3c135dc44e69557d6eb151a4ef5',
  secret: 'b8a00147732d4495864e25cba6b5ff66'
});
 app.get('/playlist', function(req,res){
  spotify
  .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
  .then(function(data) {
    console.dir(data);
    res.render("playlist",{playlist:data});
    
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
 })



console.log('Listening on 8888');
app.listen(8888);


// });