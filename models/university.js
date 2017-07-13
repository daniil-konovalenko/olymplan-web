'use strict';


module.exports = function(sequelize, DataTypes) {
    var University = sequelize.define('University', {
        name_abbreviation_eng: DataTypes.STRING,
        name_abbreviation_rus: DataTypes.STRING,
        name: DataTypes.STRING,
        full_name: DataTypes.STRING,
        is_sharaga: DataTypes.BOOLEAN,
        description: DataTypes.TEXT,
        external_url: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return University;
};
