const { Router } = require('express');
const { Agricultores } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const agricultores = await Agricultores.findAll();
  res.status(200).json(agricultores);
});



module.exports = router;

/*cadastrarAgricultores(agricultores) {
      const novoAgricultor = {
          razaosocial: agricultores.razaosocial,
          nome: agricultores.nome,
          cpf: agricultores.cpf,
          celular: agricultores.celular,
          estado: agricultores.estado,
          cidade: agricultores.cidade
      }
*/
