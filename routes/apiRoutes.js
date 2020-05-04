var express = require('express');
var app = express();
var connection = require('../config/connection');




var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'fee7a3c135dc44e69557d6eb151a4ef5',
  secret: 'b8a00147732d4495864e25cba6b5ff66'
});
 


//adding playlist ID to MySQL table
app.get('/scis', function(req, res){
    
    spotify
    .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
    .then(function(data) {
        var newdata = data.id;
        var query = "INSERT INTO playlists SET ?"
      connection.query(query, {playlistID: newdata}, function(result){
         res.end;
      })
    })
});

//adding track name and artist to MySQL table
app.get('/name', function(req, res){
    spotify
    .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
    .then(function(data) {
      for (let i = 0; i < data.tracks.items.length; i++) {
        var track = data.tracks.items[i].track.name;
        
    };
      for (let i = 0; i < data.tracks.items.length; i++) {
        var artist = data.tracks.items[i].track.artists[0].name;
        
      };
        
        var query = "INSERT INTO track SET ?"
      connection.query(query,{name: track, artist: artist}, function(result){
       
      })
    })
});

//getting the users playlist
app.get('/j', function(req, res){
    
        spotify
        .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
        .then(function(data) {
          res.json(data); 
        })
        .catch(function(err) {
          console.error('Error occurred: ' + err); 
        }); 
    
});

//creating a playlist
app.get('/ko', function(req, res){
    spotify
    .request('https://api.spotify.com/v1/users/12126451980/playlists')
    .then(function(data) {
      res.json(data); 
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    }); 
})

console.log('Listening on 8888');
app.listen(8888);
