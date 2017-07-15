'use strict';
module.exports = function(sequelize, DataTypes) {
	var University = sequelize.define('University', {
		name: DataTypes.STRING,
        isSaraga: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
			}
		}
	});
	return University;
};
