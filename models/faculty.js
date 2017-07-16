'use strict';

module.exports = function (sequelize, DataTypes) {
    var Faculty = sequelize.define('Faculty', {
            name: DataTypes.STRING,
            external_url: DataTypes.STRING,
            description: DataTypes.TEXT,
        }, {
            classMethods: {
                associate: function (models) {
                    Faculty.belongsTo(models.University);
                    Faculty.hasMany(models.EduProgram);
                },
            },
        });


    return Faculty;
};
