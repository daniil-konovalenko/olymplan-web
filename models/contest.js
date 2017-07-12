'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contest = sequelize.define('Contest', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    grades: DataTypes.ARRAY(DataTypes.INTEGER),
    year: DataTypes.INTEGER, // educational year start
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // metaContents
        // stages: DataTypesARRAY(DataTypes.STRING),
      }
    }
  });
  return Contest;
};
