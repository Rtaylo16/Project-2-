var express = require("express");
var router = express.Router();
var tracks = require("../models/songsTB.js");
var playlist = require("../models/songsTB.js");

router.get("/", function(req, res) {
    tracks.all(function(data) {
        var hbsObject = {
            track: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
    playlist.all(function(data) {
        var hbsObject = {
            playlists: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/track", function(req, res) {
    tracks.create([
        "name", "artist"
    ], [
        req.body.name, req.body.artist
    ], function(result) {
        res.json({ id: result.insertId });
    });
});
router.post("/api/playlists", function(req, res) {
    playlist.create([
        "playListID"
    ], [
        req.body.playlistID
    ], function(result) {
        res.json({ id: result.insertId });
    });
});


router.delete("/api/track/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    tracks.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete("api/playlists/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    playlist.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;