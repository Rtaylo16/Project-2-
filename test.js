const playlistData = function () {
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify({
        id: 'fee7a3c135dc44e69557d6eb151a4ef5',
        secret: 'b8a00147732d4495864e25cba6b5ff66'
    });

    spotify
        .request('https://api.spotify.com/v1/playlists/6DPMOhfZP3RcpNEH0zpA9B')
        .then(function (data) {
            for (let i = 0; i < data.tracks.items.length; i++) {
                var track = data.tracks.items[i].track.name;

            };
            
            for (let i = 0; i < data.tracks.items.length; i++) {
                var artist = data.tracks.items[i].track.artists[0].name;

            }
        
            
        });
};

module.exports = playlistData;