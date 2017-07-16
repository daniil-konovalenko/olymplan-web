'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('UserInfos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            sex: {
                type: Sequelize.STRING,
            },
            grade: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            whatsapp_nick: {
                type: Sequelize.STRING,
            },
            viber_nick: {
                type: Sequelize.STRING,
            },
            telegram_nick: {
                type: Sequelize.STRING,
            },
            UserId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: true,
                references: {
                    model: 'User',
                    key: 'id'
                }
            },
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('UserInfos');
    }
};
