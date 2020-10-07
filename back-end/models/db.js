const express = require('express');

//Biblioteca para facilitar uso do Mysql
const mysqlModel = require('./db-mysql-model');

// Conexão com o banco de dados
const connection = mysqlModel.createConnection();
module.exports = {
    Produto: connection.extend({
      tableName: "produto"
    }),
    Informacoes: connection.extend({
      tableName: "informacoes"
    }),
    Motivos: connection.extend({
      tableName: "motivos"
    }),
    Pilhas: connection.extend({
      tableName: "pilhas"
    }),
    Avaliacoes: connection.extend({
      tableName: "avaliacoes"
    }),
    Precos: connection.extend({
      tableName: "precos"
    }),
    Rodape: connection.extend({
      tableName: "rodape"
    }),
    Files: connection.extend({
      tableName: "files"
    })
  }