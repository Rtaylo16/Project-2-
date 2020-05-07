module.exports = function (sequelize, DataTypes) {
    var Playlist = sequelize.define("Playlist", {
        playlistID: {
            type: DataTypes.STRING,
            required: true
        },

    });

    return Playlist;
};