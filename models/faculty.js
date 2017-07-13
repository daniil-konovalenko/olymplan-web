'use strict';
var university = require('./university');

module.exports = function(sequelize, DataTypes) {
    var Faculty = sequelize.define('Faculty', {
        name: DataTypes.STRING,
        external_url: DataTypes.STRING,
        description: DataTypes.TEXT,
    },
    {
    classMethods: {
        associate: function(models) {
            // associations can be defined here
        },
    getterMethods: {
        url: () => {
            return '/uni/' + this.university + this.name;
        }
        }
    }
    });
    var University = university(sequelize, DataTypes);
    Faculty.belongsTo(University, {as: 'university', foreignKey: 'UniversityId'});
    University.hasMany(Faculty, {as: 'faculties'});
    return Faculty;
};
