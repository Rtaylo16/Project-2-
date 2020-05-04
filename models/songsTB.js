var orm = require("../config/orm.js");

var tracks = {
    all: function(cb) {
        orm.all("track", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("track", cols, vals, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("track", condition, function(res) {
            cb(res);
        });
    }
};


var playlist = {
    all: function(cb) {
        orm.all("playlists", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("playlists", cols, vals, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("playlists", condition, function(res) {
            cb(res);
        });
    }
};


module.exports = tracks;
module.exports = playlist;