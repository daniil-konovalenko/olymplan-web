'use strict';

var faculty = require('./faculty');

module.exports = function(sequelize, DataTypes) {
    var University = sequelize.define('University', {
        nameAbbreviationEng: DataTypes.STRING,
        nameAbbreviationRus: Data.Types.STRING,
        nameFull: Data.Types.STRING,
        isSharaga: DataTypes.BOOLEAN,
        description: DataTypes.TEXT,
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    University.hasMany(Faculty, {as: 'universityFaculties'});
    return University;
};
