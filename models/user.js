module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            required: true
        },
        password: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATA,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    User.associate = function(models) {
        User.hasMany(models.queue, {
            onDelete: "CASCADE"
        });

        User.belongsToMany(models.queue, {
            onDelete: "CASCADE"
        });
    };

    return User;
};