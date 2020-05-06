module.exports = function(sequelize, DataTypes) {
    var Track = sequelize.define("Track", {
      
        name: DataTypes.STRING,
        artist: DataTypes.STRING,
        album: DataTypes.STRING
       
    });
    
    return Track;
};