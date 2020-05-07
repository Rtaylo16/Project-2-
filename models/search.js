module.exports = function (sequelize, DataTypes) {
    var Searches = sequelize.define("Search", {
        searchName: DataTypes.STRING,
        searchArtist: DataTypes.STRING,
        searchAlbum: DataTypes.STRING,

    });

    return Searches;
};