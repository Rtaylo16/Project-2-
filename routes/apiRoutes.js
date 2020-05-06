var express = require('express');
var app = express();
var connection = require('../config/connection');
var db = require('../models');

module.exports = function (app) {
  var Spotify = require('node-spotify-api');

  var spotify = new Spotify({
    id: 'fee7a3c135dc44e69557d6eb151a4ef5',
    secret: 'b8a00147732d4495864e25cba6b5ff66'
  });



  //adding playlist ID to MySQL table
  app.get('/getid', function (req, res) {

    spotify
      .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
      .then(function (data) {

        var newdata = data.id;
        db.Playlist.create({ playlistID: newdata })
          .then(function (result) {
            res.json({ success: true });
          })
        // var query = "INSERT INTO playlists SET ?"
        // connection.query(query, { playlistID: newdata }, function (result) {
        //   res.end;
        // })
      })
  });

  //adding track name, artist and album to MySQL table
  app.get('/name', function (req, res) {
    spotify
      .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
      .then(function (data) {
        for (let i = 0; i < data.tracks.items.length; i++) {
          var track = data.tracks.items[i].track.name;
          var artist = data.tracks.items[i].track.artists[0].name;
          var album = data.tracks.items[i].track.album.name;
          db.Track.create({ name: track, artist: artist, album: album });
          
        };
        res.json({ success: true });
      })
  });

  //getting the users playlist ID
  app.get('/j', function (req, res) {

    spotify
      .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.error('Error occurred: ' + err);
      });

  });

  //creating a playlist
  app.get('/create', function (req, res) {
    spotify
      .request('https://api.spotify.com/v1/users/12126451980/playlists')
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.error('Error occurred: ' + err);
      });
  });

  //search query
  app.get('/search', function (req, res) {
    spotify.search({ type: 'track', query: 'All the Small Things', limit: 15 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      for (let i = 0; i < data.tracks.items.length; i++) {
        var track = data.tracks.items[i].track.name;
        var artist = data.tracks.items[i].track.artists[0].name;
        var album = data.tracks.items[i].track.album.name;
        var query = "INSERT INTO search SET ?"
        connection.query(query, { searchName: track, searchArtist: artist, searchAlbum: album }, function (result) { })

      }
    });
  });

  app.get("/test", function(req, res){
    res.redirect("../test.html")
  });



}