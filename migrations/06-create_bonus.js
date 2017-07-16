'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Bonus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            diploma_level:{
                type: Sequelize.INTEGER,
            },
            subject:{
                type: Sequelize.STRING,
            },
            bonus_type: {
                type: Sequelize.STRING
            },
            ContestId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'Contests',
                    key: 'id'
                }
            },
            EduProgramId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'EduPrograms',
                    key: 'id'
                }
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Bonus');
    }
};
