'use strict';

module.exports = function(sequelize, DataTypes) {
    var UserInfo = sequelize.define('UserInfo', {
        sex: {
            type: DataTypes.STRING,
        },
        grade: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        whatsapp_nick: {
            type: DataTypes.STRING,
        },
        viber_nick: {
            type: DataTypes.STRING,
        },
        telegram_nick: {
            type: DataTypes.STRING,
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
