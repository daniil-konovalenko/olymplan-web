'use strict';

module.exports = function (sequelize, DataTypes) {
    var MetaContest = sequelize.define('MetaContest', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        external_url: {
            type: DataTypes.STRING(length = 1000),
            isUrl: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
    }, {
        timestamp: false,
        classMethods: {
            associate: function (models) {
                metaContest.hasOne(models.Contest);
            },
        },
    });
    return MetaContest;
};
