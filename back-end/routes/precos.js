const express = require('express');
const router = express.Router();

var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getPrecos', (req, res) => { /// Retorna do banco todos os status cadastrados
    precos = new dbfun.Precos();
    precos.query("SELECT * FROM precos;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.post('/addPrecos', function(req, res) { 
    precos = new dbfun.Precos();
    precos.query("INSERT INTO `landingpage`.`precos`(`id`, `preco`, `parcela`, `unidade`, `imagem`)VALUES('"
        + req.body.id + "','"
        + req.body.preco + "','"
        + req.body.parcela + "','"
        + req.body.unidade + "','"
        + req.body.imagem +"');",
      function(err) {
        if(err){
          res.json({
            status: false,
            message: 'Erro ao salvar.'
          });
        }else{
          res.json({
            status: true,
            message: 'Salvo com sucesso!'
          });
        }
      });

  });
  router.put('/editPrecos', function(req, res) { 
    precos = new dbfun.Precos();
    precos.query("UPDATE `landingpage`.`precos` SET `preco` = '"
    + req.body.preco + "', `parcela` = '"
    + req.body.parcela + "', `unidade` = '"
    + req.body.unidade + "', `imagem` = '"
    + req.body.imagem
      +"'WHERE `id` = '"+req.body.id+"';",
      function(err) { // Caso ocorra um erro
        if(err)
          res.send(err);
      });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Salvo com sucesso!'
    });
  });

  router.delete('/removerPreco/:id', function(req, res) {
    preco = new dbfun.Precos();
    preco.remove('id =' + req.params.id, function(err, res) {
      if(err)
        return  res
    });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Removido com sucesso!'
    });
  });

module.exports = router;