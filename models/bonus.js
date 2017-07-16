'use strict';

module.exports = function (sequelize, DataTypes) {
    var Bonus = sequelize.define('Bonus', {
        diploma_level: {
            type: DataTypes.INTEGER,
        },
        subject: {
            type: DataTypes.STRING,
        },
        bonus_type: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                Bonus.belongsTo(models.Contest);
                Bonus.belongsTo(models.EduProgram);
            },
        },
    });
    return Bonus;
};
