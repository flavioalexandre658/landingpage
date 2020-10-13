const express = require('express');
const router = express.Router();

var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getAvaliacao/:id', function(req, res) {
  avaliacoes = new dbfun.Avaliacoes();
  avaliacoes.find('all', {where:"id = " + req.params.id,
  }, function(err, rows, fields) {
    if(err) throw err;
    res.json(rows);
  });
});

router.get('/getAvaliacoes', (req, res) => { /// Retorna do banco todos os status cadastrados
    avaliacoes = new dbfun.Avaliacoes();
    avaliacoes.query("SELECT * FROM avaliacoes;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.post('/addAvaliacoes', function(req, res) { 
    avaliacoes = new dbfun.Avaliacoes();
    avaliacoes.query("INSERT INTO `landingpage`.`avaliacoes`(`id`, `titulo`, `cidade`, `idImagem`)VALUES('"
        + req.body.id + "','"
        + req.body.titulo + "','"
        + req.body.cidade + "','"
        + req.body.idImagem +"');",
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
  router.put('/editAvaliacoes', function(req, res) { 
    avaliacoes = new dbfun.Avaliacoes();
    avaliacoes.query("UPDATE `landingpage`.`avaliacoes` SET `titulo` = '"
    + req.body.titulo + "', `cidade` = '"
    + req.body.cidade + "', `idImagem` = '"
    + req.body.idImagem
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

  router.delete('/removerAvaliacao/:id', function(req, res) {
    avaliacao = new dbfun.Avaliacoes();
    avaliacao.remove('id =' + req.params.id, function(err, res) {
      if(err)
        return  res;
    });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Removido com sucesso!'
    });
  });

module.exports = router;