'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Faculties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            external_url: {
                type: Sequelize.STRING(750),
            },
            description: {
                type: Sequelize.TEXT
            },

            UniversityId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'Universities',
                    key: 'id'
                }
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Faculties');
    }
};
