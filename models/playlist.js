module.exports = function (sequelize, DataTypes) {
    var Playlist = sequelize.define("Playlist", {
        playlistID: {
            type: DataTypes.STRING,
            required: true
        },

    });
    // Playlist.associate = function(models) {
    //     Playlist.hasMany(models.song, {
    //         onDelete: "CASCADE"
    //     });

    //     Playlist.belongsToMany(models.user, {
    //         onDelete: "CASCADE"
    //     });

    //     Playlist.belongsTo(models.user, {
    //         foreignKey: "owner"
    //     });
    // };

    return Playlist;
};