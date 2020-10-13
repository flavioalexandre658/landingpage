const express = require('express');
const router = express.Router();

var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getMotivo/:id', function(req, res) {
  motivos = new dbfun.Motivos();
  motivos.find('all', {where:"id = " + req.params.id,
  }, function(err, rows, fields) {
    if(err) throw err;
    res.json(rows);
  });
});

router.get('/getMotivos', (req, res) => { /// Retorna do banco todos os status cadastrados
    motivos = new dbfun.Motivos();
    motivos.query("SELECT * FROM Motivos;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.post('/addMotivos', function(req, res) { 
    motivos = new dbfun.Motivos();
    motivos.query("INSERT INTO `landingpage`.`motivos`(`id`, `tituloTab`, `titulo`, `conteudo`, `icone`)VALUES('"
        + req.body.id + "','"
        + req.body.tituloTab + "','"
        + req.body.titulo + "','"
        + req.body.conteudo + "','"
        + req.body.icone +"');",
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
  router.put('/editMotivos', function(req, res) { 
    motivos = new dbfun.Motivos();
    motivos.query("UPDATE `landingpage`.`motivos` SET `tituloTab` = '"
    + req.body.tituloTab + "', `titulo` = '"
    + req.body.titulo + "', `conteudo` = '"
    + req.body.conteudo + "', `icone` = '"
    + req.body.icone
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

  router.delete('/removerMotivo/:id', function(req, res) {
    motivo = new dbfun.Motivos();
    motivo.remove('id =' + req.params.id, function(err, res) {
      if(err)
        return  res;
    });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Removido com sucesso!'
    });
  });

module.exports = router;