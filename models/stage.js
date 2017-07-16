'use strict';

module.exports = function (sequelize, DataTypes) {
    var Stage = sequelize.define('Stage', {
        places: DataTypes.ARRAY(DataTypes.STRING),
        date: DataTypes.DATE,
        is_intramural: DataTypes.BOOLEAN,
        start_time: DataTypes.DATE,
        duration: DataTypes.TIME,
        deadline: DataTypes.DATE,
        notes: DataTypes.TEXT,

    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                Stage.hasMany(models.Stage, {as: 'requiredStages'});
                Stage.belongsToMany(models.Contest, {
                    through: 'ContestStages',
                });
            },
        },
    });
    return Stage;
};
