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

router.get('/editarAgricultores/:id', async (req, res) => {
    AgricultoresController.carregar(req.params.id).then((agricultores) => {
        res.render('editarAgricultores', {
            agricultores: agricultores.toJSON()
        })
    }).catch((erro) => {
        console.error(erro)
        res.redirect("/")
        res.send("Falha Abrir Edição! <br>" + "Error: " + erro.message)
    })
})

router.post('/editarAgricultores', async (req, res) => {
    AgricultoresController.atualizar(req.body, req.body.id).then(() => {
        res.redirect('/listarAgricultores')
    }).catch((erro) => {
        console.error(erro)
        res.redirect("/")
        res.send("Falha Abrir Edição! <br>" + "Error: " + erro.message)
    })
})

router.post("/excluirAgricultores", async (req, res) => {
    AgricultoresController.excluir(req.body.id).then(() => {
        //res.redirect('/listarAgricultores')
        res.status(200).send('OK')
    }).catch((erro) => {
        console.error(erro)
        //res.redirect("/")
        res.send("Falha Excluir! <br>" + "Error: " + erro.message)
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