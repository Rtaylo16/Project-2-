module.exports = function(sequelize, DataTypes) {
    var Track = sequelize.define("Track", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.String,
        artist: DataTypes.STRING,
        isPlaying: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    
    return Track;
};