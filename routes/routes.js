const express = require('express');
const router = express.Router();

const AgricultoresController = require('../controllers/agricultoresController')

router.get('/', (req, res) => {
    res.render('index');
})


router.get('/cadastroAgricultores', (req, res) => {
    res.render('cadastroAgricultores');
})

router.get('/listarAgricultores', (req, res) => {
    AgricultoresController.listar().then((agricultores) => {
        res.render('listarAgricultores', {
            agricultores: agricultores.map(agricultores => agricultores.toJSON())
        })
    }).catch((erro) => {
        res.send("Falha ao listar! <br>" + "Error: " + erro.message)
    })
})

router.post('/editarAgricultores/:agricultores.id', async (req, res) => {
        res.render('index')
})

router.post("/excluirAgricultores/:agricultores.id", async (req, res) => {
    AgricultoresController.excluir(req.params.id).then(() => {
        req.flash('Usuário deletado com Sucesso!')
        res.redirect('/listarAgricultores')
    }).catch((erro) => {
        req.flash('error_msg', "Erro ao deletar usuário")
        res.redirect("/")
    })
});



router.post('/salvarAgricultores', (req, res) => {
    AgricultoresController.inserir(req.body).then((agricultor) => {
        res.redirect('/listarAgricultores')
    }).catch((erro) => {
        res.send("Falha ao cadastrar! <br>" + "Error: " + erro.message)
    })
})

//404 ERROR
router.use((req, res) => {
    res.send('ERROR 404, Página não encontrada');
})

module.exports = router;