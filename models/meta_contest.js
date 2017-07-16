'use strict';

module.exports = function(sequelize, DataTypes) {
    var MetaContest = sequelize.define('MetaContest', {
        name: {
            DataTypes.STRING,
            unique: true,
            allow Null: false
        },
        external_url: {
            DataTypes.STRING(length = 1000),
            isUrl: true,
        },
        description: {
            DataTypes.TEXT,
        },
        timestamp: false,
    }, {
        classMethods: {
            associate: function(models) {
                metaContest.hasOne(models.Contest);
            },
        },
    });
    return MetaContest;
};
