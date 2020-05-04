module.exports = function(sequelize, DataTypes) {
    var Playlist = sequelize.define("Post", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.INETEGER,
            required: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    Playlist.associate = function(models) {
        Playlist.hasMany(models.song, {
            onDelete: "CASCADE"
        });

        Playlist.belongsToMany(models.user, {
            onDelete: "CASCADE"
        });

        Playlist.belongsTo(models.user, {
            foreignKey: "owner"
        });
    };

    return Playlist;
};