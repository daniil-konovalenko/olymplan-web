'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('ContestStages', {

            StageId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Stages',
                    key: 'id'
                }
            },
            ContestId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Contests',
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
