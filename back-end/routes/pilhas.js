const express = require('express');
const router = express.Router();

var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getPilha/:id', function(req, res) {
  pilhas = new dbfun.Pilhas();
  pilhas.find('all', {where:"id = " + req.params.id,
  }, function(err, rows, fields) {
    if(err) throw err;
    res.json(rows);
  });
});

router.get('/getPilhas', (req, res) => { /// Retorna do banco todos os status cadastrados
    pilhas = new dbfun.Pilhas();
    pilhas.query("SELECT * FROM pilhas;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.post('/addPilhas', function(req, res) { 
    pilhas = new dbfun.Pilhas();
    pilhas.query("INSERT INTO `landingpage`.`pilhas`(`id`, `titulo`, `conteudo`, `idImagem`, `animacao`)VALUES('"
        + req.body.id + "','"
        + req.body.titulo + "','"
        + req.body.conteudo + "','"
        + req.body.idImagem + "','"
        + req.body.animacao +"');",
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
  router.put('/editPilhas', function(req, res) { 
    pilhas = new dbfun.Pilhas();
    pilhas.query("UPDATE `landingpage`.`pilhas` SET `titulo` = '"
    + req.body.titulo + "', `conteudo` = '"
    + req.body.conteudo + "', `animacao` = '"
    + req.body.animacao + "', `idImagem` = '"
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

  router.delete('/removerPilha/:id', function(req, res) {
    pilha = new dbfun.Pilhas();
    pilha.remove('id =' + req.params.id, function(err, res) {
      if(err)
        return  res;
    });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Removido com sucesso!'
    });
  });

module.exports = router;