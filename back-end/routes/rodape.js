const express = require('express');
const router = express.Router();

var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getRodape', (req, res) => { /// Retorna do banco todos os status cadastrados
    rodape = new dbfun.Rodape();
    rodape.query("SELECT * FROM rodape;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.post('/addRodape', function(req, res) { 
    rodape = new dbfun.Rodape();
    rodape.query("INSERT INTO `landingpage`.`rodape`(`id`, `logomarca`, `sobrenos`, `email`, `endereco`, `telefone`)VALUES('"
        + req.body.id + "','"
        + req.body.logomarca + "','"
        + req.body.sobrenos + "','"
        + req.body.email + "','"
        + req.body.endereco + "','"
        + req.body.telefone +"');",
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

  router.put('/editRodape', function(req, res) { 
    rodape = new dbfun.Rodape();
    rodape.query("UPDATE `landingpage`.`rodape` SET `logomarca` = '"
    + req.body.logomarca + "', `sobrenos` = '"
    + req.body.sobrenos + "', `email` = '"
    + req.body.email + "', `endereco` = '"
    + req.body.endereco + "', `telefone` = '"
    + req.body.telefone
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

  router.delete('/removerRodape/:id', function(req, res) {
    rodape = new dbfun.Rodape();
    rodape.remove('id =' + req.params.id, function(err, res) {
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