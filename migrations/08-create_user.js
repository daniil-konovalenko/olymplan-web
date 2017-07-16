'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email: {
                type: Sequelize.STRING,
            },
            password_hash: {
                type: Sequelize.STRING,
            },
            salt: {
                type: Sequelize.STRING,
            },
            user_type: {
                type: Sequelize.STRING,
            },
            has_subscription: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};
