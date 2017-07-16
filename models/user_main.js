'use strict';

module.exports = function (sequelize, DataTypes) {
    var UserMain = sequelize.define('UserMain', {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Please, enter correct email address",
                },
            },
        },
        password_hash: {
            type: DataTypes.STRING,
        },
        salt: {
            type: DataTypes.STRING,
        },
        user_type: {
            type: DataTypes.STRING,
        },
    }, {
        timestamp: false,
        classMethods: {
            associate: function (models) {
                UserMain.hasOne(models.UserInfo);
                UserMain.belongsTo(models.UserInfo);
            },
        },
    });
    return UserMain;
};
