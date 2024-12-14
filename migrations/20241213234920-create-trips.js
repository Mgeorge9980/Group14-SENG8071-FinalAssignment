'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      route_from: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      route_to: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      truckId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Trucks',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      driver1Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      driver2Id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Trips');
  },
};
