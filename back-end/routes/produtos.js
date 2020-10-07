const express = require('express');
const router = express.Router();

var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getProduto', (req, res) => { /// Retorna do banco todos os status cadastrados
    produto = new dbfun.Produto();
    produto.query("SELECT * FROM produto;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.post('/addProduto', function(req, res) { 
    produto = new dbfun.Produto();
    produto.query("INSERT INTO `landingpage`.`produto`(`id`, `idImagem`, `nome`, `video`, `headline`)VALUES('"
        + req.body.id + "','"
        + req.body.idImagem + "','"
        + req.body.nome + "','"
        + req.body.video + "','"
        + req.body.headline +"');",
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
  router.put('/editProduto', function(req, res) { 
    produto = new dbfun.Produto();
    produto.query("UPDATE `landingpage`.`produto` SET `idImagem` = '"
    + req.body.idImagem + "', `nome` = '"
    + req.body.nome + "', `video` = '"
    + req.body.video + "', `headline` = '"
    + req.body.headline
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

  router.delete('/removerProduto/:id', function(req, res) {
    produto = new dbfun.Produto();
    produto.remove('id =' + req.params.id, function(err, res) {
      if(err)
        return  res.json({  /// Caso ocorra com sucesso
          status: true,
          message: 'Erro ao remover!'
        });
    });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Removido com sucesso!'
    });
  });
  
module.exports = router;