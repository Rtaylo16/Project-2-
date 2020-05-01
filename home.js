var express = require('express');


app.get('', function(req,res){
    request.post(authOptions, function(error, response, body){
        if (!error && response.statusCode === 200){
            var access_token = body.access_token,
            refresh_token = body.refresh_token;

            request.get(options, function(error, response, body) {
                console.log(body);
              });
        }
    })
})

var request = require("require");
var user_id = "justin";
var playlist_url = "https://api.spotify.com/v1/users/" + user_id + "/playlists";

request({url:playlist_url, header})