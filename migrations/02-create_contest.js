'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Contests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            level: {
                type: Sequelize.INTEGER,
            },
            subject: {
                type: Sequelize.STRING,
            },
            grades: {
                type: Sequelize.ARRAY(Sequelize.INTEGER)
            },
            year: {
                type: Sequelize.INTEGER,
            },

            MetaContestId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'MetaContests',
                    key: 'id'
                }
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Contests');
    }
};
