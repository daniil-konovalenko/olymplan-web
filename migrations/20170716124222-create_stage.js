'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Stages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            places: {
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
            date: {
                type: Sequelize.DATE,
            },
            is_intramural: {
                type: Sequelize.BOOLEAN,
            },
            start_time: {
                type: Sequelize.DATE,
            },
            duration: {
                type: Sequelize.TIME,
            },
            deadline: {
                type: Sequelize.DATE,
            },
            notes: {
                type: Sequelize.TEXT,
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
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Stages');
    }
};
