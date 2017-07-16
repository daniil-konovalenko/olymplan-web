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
        timestamps: false,
        classMethods: {
            associate: function (models) {
                UserMain.hasOne(models.UserInfo);
            },
        },
    });
    return UserMain;
};
