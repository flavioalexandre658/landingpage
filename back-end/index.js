require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path')
var cors = require('cors');

//Conexao com o banco será feita no arquivo db.js
const dbfun = require('./models/db');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
  console.log("funcionando");
})
app.use(cors());
app.use('/api', routes)


//Pasta utilizada para o frontEnd vai ser a pasta WWW
app.use(express.static(__dirname + '../front-end'));
app.use('/files', express.static(path.resolve(__dirname, "tmp", "uploads")));



app.listen(3001, function() {
  console.log('Rodando porta 3001');
});