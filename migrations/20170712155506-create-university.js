'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Universities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nameAbbreviationEng: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            nameAbbreviationRus: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            nameFull: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            isSharaga: {
                type: Sequelize.BULEAN,
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Universities');
    }
};
