module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
       
        username: {
            type: DataTypes.STRING,
            required: true
        },
        password: DataTypes.STRING
        
    });
    // User.associate = function(models) {
    //     User.hasMany(models.queue, {
    //         onDelete: "CASCADE"
    //     });

    //     User.belongsToMany(models.queue, {
    //         onDelete: "CASCADE"
    //     });
    // };

    return User;
};