module.exports = function(sequelize, DataTypes) {
    var Track = sequelize.define("Track", {
      
        name: DataTypes.STRING,
        artist: DataTypes.STRING,
        album: DataTypes.STRING
       
    });

    // Track.associate = function(models) {
    //     Track.hasMany(models.song, {
    //         onDelete: "CASCADE"
    //     });

    //     Track.belongsTo(models.user, {
    //         foreignKey: "Owner"
    //     });
    // };
    
    return Track;
};