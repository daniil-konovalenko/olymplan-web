'use strict';

module.exports = function(sequelize, DataTypes) {
    var UserInfo = sequelize.define('UserInfo', {
        sex: {
            DataTypes.STRING,
        },
        grade: {
            DataTypes.INTEGER,
        },
        name: {
            DataTypes.STRING,
        },
        whatsup_nick: {
            DataTypes.STRING,
        },
        viber_nick: {
            DataTypes.STRING,
        },
        telegram_nick: {
            DataTypes.STRING,
        },
        timestamp: false,
    }, {
        classMethods: {
            associate: function(models) {
                UserInfo.hasOne(User.Main);
            },
        },
    });
    return UserInfo;
};
