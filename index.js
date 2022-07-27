const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');

//app.use(express.json());

//DEFINI O TEMPLATE ENGINE
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

//DEFINI OS ARQUIVOS PÚBLICOS
app.use(express.static(path.join(__dirname, 'public')))


//ROTAS
app.get('/', (req, res) => {
    res.render('index');
})

app.use('/agricultores', controllers.agricultores);

app.get('/cadastroAgricultores', (req, res) => {
    res.render('cadastroAgricultores');
})

app.post('/salvarAgricultores', async(req, res) => {
    res.send("Nome: " + req.body.nomefantasia)
})


//404 ERROR
app.use((req, res) => { //middleware
    res.send('ERROR 404, Página não encontrada');
})


//EXECUTA O SERVIDOR
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));