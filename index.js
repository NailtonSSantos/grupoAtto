const express = require('express')
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
    console.log(req.url)

    fs.readFile('../src/views/index.html', function(error, content){
        res.end(content)
    })
})

server.listen(3000)
console.log('Servidor escultando na porta 3000')