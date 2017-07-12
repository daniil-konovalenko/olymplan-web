'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Contests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      level: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      subject: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      grades: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Contests');
  }
};
