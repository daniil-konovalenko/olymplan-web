'use strict';

module.exports = function(sequelize, DataTypes) {
    var Bonus = sequelize.define('Bonus', {
        diploma_level: {
            DataTypes.INTEGER;
        },
        subject: {
            DataTypes.STRING;
        },
        bonus_type: {
            DataTypes.STRING;
        },
    }, {
        classMethods: {
            associate: function(models) {
                Bonus.belongsTo(models.Contest);
                Bonus.hasOne(models.EduProgram);
            },
        },
    });
    return Bonus;
};
