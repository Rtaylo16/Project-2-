module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
       
        username: {
            type: DataTypes.STRING,
            required: true
        },
        password: DataTypes.STRING
        
    });
  
  return User;
};