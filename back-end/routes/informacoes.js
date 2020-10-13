const express = require('express');
const router = express.Router();

var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getInformacao/:id', function(req, res) {
  informacoes = new dbfun.Informacoes();
  informacoes.find('all', {where:"id = " + req.params.id,
  }, function(err, rows, fields) {
    if(err) throw err;
    res.json(rows);
  });
});

router.get('/getInformacoes', (req, res) => {
    informacoes = new dbfun.Informacoes();
    informacoes.query("SELECT * FROM informacoes;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.post('/addInformacoes', function(req, res) { 

    informacoes = new dbfun.Informacoes();
    informacoes.query("INSERT INTO `landingpage`.`informacoes`(`id`, `titulo`, `conteudo`, `animacao`, `idImagem`)VALUES('"
        + req.body.id + "','"
        + req.body.titulo + "','"
        + req.body.conteudo + "','"
        + req.body.animacao + "','"
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
  router.put('/editInformacoes', function(req, res) {
    informacoes = new dbfun.Informacoes();
    informacoes.query("UPDATE `landingpage`.`informacoes` SET `titulo` = '"
    + req.body.titulo + "', `conteudo` = '"
    + req.body.conteudo + "', `idImagem` = '"
    + req.body.idImagem + "', `animacao` = '"
    + req.body.animcao
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
  
  router.delete('/removerInformacao/:id', function(req, res) {
    informacao = new dbfun.Informacoes();
    informacao.remove('id =' + req.params.id, function(err, res) {
      if(err)
        return  res;
    });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Removido com sucesso!'
    });
  });

module.exports = router;