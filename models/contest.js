'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contest = sequelize.define('Contest', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    sudject: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Contest;
};
