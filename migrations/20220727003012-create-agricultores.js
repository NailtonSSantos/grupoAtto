'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  const AgricultoresTable = queryInterface.createTable("Agricultores", {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    razaosocial: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    }})

      return AgricultoresTable;

},

down: async(queryInterface) => queryInterface.dropTable("Agricultores"),
}
