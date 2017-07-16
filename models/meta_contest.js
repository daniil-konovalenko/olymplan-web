'use strict';

module.exports = function (sequelize, DataTypes) {
    var MetaContest = sequelize.define('MetaContest', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        external_url: {
            type: DataTypes.STRING(750),
            isUrl: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                MetaContest.hasOne(models.Contest);
            },
        },
    });
    return MetaContest;
};
