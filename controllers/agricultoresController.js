const { Router } = require('express');
const { Agricultores } = require('../models');

module.exports = {
    async inserir(agricultor) {
        const novoAgricultor = {
            razaosocial: agricultor.razaosocial,
            nome: agricultor.nomefantasia,
            cpf: agricultor.cpf,
            celular: agricultor.celular,
            estado: agricultor.estado,
            cidade: agricultor.cidade,
        }

        const resultado = await Agricultores.create(novoAgricultor)

        return resultado
    },

    async listar() {
        const agricultores = await Agricultores.findAll();

        return agricultores
    }
}

// const router = Router();

// router.get('/', async (req, res) => {
//     const agricultores = await Agricultores.findAll();
//     res.status(200).json(agricultores);
// });

// inserir: async (req, res) => {
//     // let json = {error:'', result:{}};

//     // let razaosocial = req.body.razaosocial;
//     // let nomefantasia = req.body.nomefantasia;
//     // let cpf = req.body.cpf;
//     // let celular = req.body.celular;
//     // let estado = req.body.estado;
//     // let cidade = req.body.cidade;

//     // console.log(Agricultores);

//     // const resultado = await Agricultores.create({
//     //   razaosocial: razaosocial,
//     //   nomefantasia: nomefantasia,
//     //   cpf: cpf,
//     //   celular: celular,
//     //   estado: estado,
//     //   cidade: cidade
//     // })

//     // return resultado
// }

// /*
// Isso deu certo
// Agricultores.create({
//   razaosocial: "Teste",
//   nome: "Teste",
//   cpf: "07269143552",
//   celular: "66996555525",
//   estado: "MT",
//   cidade: "ROO",
// })*/


// // module.exports = router;