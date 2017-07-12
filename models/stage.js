'use strict';
var Contest = require('./contest');

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
    Stage.belongsToMany(Contest, {
      through: 'ContestStages',
      as: 'contests'
    });
    return Stage;
};
