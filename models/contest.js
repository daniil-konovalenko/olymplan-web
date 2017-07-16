'use strict';

module.exports = function (sequelize, DataTypes) {
    var Contest = sequelize.define('Contest', {
        name: DataTypes.STRING,
        level: DataTypes.INTEGER,
        subject: DataTypes.STRING,
        grades: DataTypes.ARRAY(DataTypes.INTEGER),
        year: DataTypes.INTEGER, // educational year start
    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                Contest.belongsToMany(models.Stage, {
                    through: 'ContestStages',
                });
                Contest.hasMany(models.Bonus);
            },
        },
    });
    return Contest;
};
