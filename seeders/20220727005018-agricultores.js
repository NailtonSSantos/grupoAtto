'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Agricultores",
      [
        {
          razaosocial: "Silva & SIlva LTDA",
          nome: "Casa do Morango",
          cpf: "07269143552",
          celular: "(66) 9 9655-5525",
          estado: "Mato Grosso",
          cidade: "Rondonópolis"
        },
        {
          razaosocial: "Dantas & Cia LTDA",
          nome: "Dantas Ortifruti",
          cpf: "06358896541",
          celular: "(66) 9 9855-3422",
          estado: "Mato Grosso",
          cidade: "Rondonópolis"
        },
        {
          razaosocial: "Souza & Mattos LTDA",
          nome: "Fazenda 2 Irmãos",
          cpf: "04235689477",
          celular: "(66) 9 9982-3636",
          estado: "Mato Grosso",
          cidade: "Poxoréu"
        },
      ],
      {}
    ),
  down: async(queryInterface) => queryInterface.bulkDelete("Agricultores", null, {}),
}