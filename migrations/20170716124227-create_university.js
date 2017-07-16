'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Universities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            name_abbreviation_rus: {
                type: Sequelize.STRING,
            },
            name_abbreviation_eng: {
                type: Sequelize.STRING,
            },
            full_name: {
                type: Sequelize.STRING,
            },
            is_sharaga: {
                type: Sequelize.BOOLEAN,
            },
            description: {
                type: Sequelize.TEXT
            },
            external_url: {
                type: Sequelize.STRING,
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Universities');
    }
};
