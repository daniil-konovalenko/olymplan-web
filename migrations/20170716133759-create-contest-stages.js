'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('ContestStages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            StageId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Stage',
                    key: 'id'
                }
            },
            ContestId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'Contest',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },

    down: function (queryInterface, Sequelize) {
         return queryInterface.dropTable('ContestStages');
    }
};
