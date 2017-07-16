'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('MetaContests', {
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
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('MetaContests');
    }
};
