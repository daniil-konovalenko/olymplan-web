'use strict';

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
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
        has_subscription: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                User.hasOne(models.UserInfo);
            },
        },
    });
    return User;
};
