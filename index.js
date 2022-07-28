const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const rotas = require('./routes/routes');

//DEFINI O TEMPLATE ENGINE
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

//DEFINI OS ARQUIVOS PÚBLICOS
app.use(express.static(path.join(__dirname, 'public')))

//ROTAS
app.use('/', rotas);

//EXECUTA O SERVIDOR
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));