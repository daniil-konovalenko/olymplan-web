'use strict';


module.exports = function(sequelize, DataTypes) {
  var Stage = sequelize.define('Stage', {
    places: DataTypes.ARRAY(DataTypes.STRING),
    date: DataTypes.DATE,
    isIntramural: DataTypes.BOOLEAN,
    startTime: DataTypes.DATE,
    duration: DataTypes.TIME,
    deadline: DataTypes.DATE,
    notes: DataTypes.TEXT

  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  Stage.hasMany(Stage, {as: 'requiredStages'});
  return Stage;
};



