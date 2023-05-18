# cadastroAgricultores

Sistema de cadastro de Agricultores, criado com Node para cadastroAgricultores de Rondonópolis

Requisitos: Visual Studeo, Gitbash, Mysql

PASSOS:

- Instalar o Express (Iniciar o Servidor e trabalhar com Rotas): No terminal dá o comando npm install express

- Instalar o Nodemon (Reiniciar o Servidor a cada atualização): No terminal digita o comando npm install --save-dev nodemon

- Instalar o EJS (Template Engine): No Terminal digita npm install ejs

- Instalar o Body-Parser (receber solicitações em JSON): No terminal digita npm install body-parser

- Instalar o Sequelize (ORM para mysql): No terminal digita npm install --save sequelize
e npm install --save-dev sequelize-cli

- Instalar o driver da Base de Dados: npm install --save mysql2

- Para criar o banco de dados, com o Mysql instalado, observe as seguintes configurações:
* Usuário: root
* Senha: 123
* Caso não queira usar esses dados, altere no arquivo config.json para os dados do seu banco Mysql.
Ou conecte no MYSQL pelo terminal: mysql -h localhost -u root -p. Depois use o seguinte comando: create database if not exists cadastroAgricultores default character set utf8mb4 collate utf8mb4_unicode_ci; Também é possível criar de forma gráfica usando o Workbench.

- Depois abra o terminal e digite: npx sequelize db:create. (CRIA O BANCO DE DADOS)

- Para criar a tabela, execute, no terminal, o seguinte comando: npx sequelize db:migrate

- Para Alimentar/popular a tabela vamos usar os Seeders criados, execute o comando npx sequelize db:seed:all
