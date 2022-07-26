const express = require('express');
const path = require('path');
const app = express();

//DEFINI O TEMPLATE ENGINE
app.set('view engine', 'ejs')


//DEFINI OS ARQUIVOS ESTÁTICOS
//app.use(express.static(path.join(__dirname, 'views')));


//DEFINI OS ARQUIVOS PÚBLICOS
app.use(express.static(path.join(__dirname, 'public')))


//ROTAS
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cadastroAgricultores', (req, res) => {
    res.render('cadastroAgricultores');
})

app.post('/salvarAgricultores', (req, res) => {
    console.log('Salvou');
    res.send('Salvou o Agricultor');
})


//404 ERROR
app.use((req, res) => { //middleware
    res.send('ERROR 404, Página não encontrada');
})


//EXECUTA O SERVIDOR
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));