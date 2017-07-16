'use strict';

module.exports = function (sequelize, DataTypes) {
    var EduProgram = sequelize.define('EduProgram', {
        name: DataTypes.STRING,
        external_url: DataTypes.STRING,
        description: DataTypes.TEXT,
    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                EduProgram.belongsTo(models.Faculty);
                EduProgram.hasMany(models.Bonus);
            },
        },
    });
    return EduProgram;
};
