const express = require('express');
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

router.get('/getFiles',(req, res) => { /// Retorna do banco todos os status cadastrados
    files = new dbfun.Files();
    files.query("SELECT * FROM files;",
    function(err, rows, fields) {
        if(err) throw err;
        res.json(rows);
    });
});

router.put('/editFiles', multer(multerConfig).single('file'),  function(req, res) { 
  files = new dbfun.Files();
  files.query("UPDATE `landingpage`.`files` SET `name` = '"
  + req.file.originalname + "', `chave` = '"
  + req.file.key + "', `size` = '"
  + req.file.size + "', `url` = '"
  + process.env.APP_URL+"/files/"+req.file.key
    +"'WHERE `idImagem` = '"+req.body.id+"';",
    function(err) { // Caso ocorra um erro
      if(err)
        res.send(err);
    });
  res.json({  /// Caso ocorra com sucesso
    status: true,
    message: 'Salvo com sucesso!'
  });
});

router.post('/addFiles', multer(multerConfig).single('file'),function(req, res) { 
    files = new dbfun.Files();
    files.query("INSERT INTO `landingpage`.`files`(`idImagem`, `name`, `chave`, `size`, `url`)VALUES('"
        + req.body.id + "','"
        + req.file.name + "','"
        + req.file.key + "','"
        + req.file.size + "','"
        + process.env.APP_URL+"/files/"+req.file.key +"');",
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
  router.delete('/removerFile/:id', function(req, res) {
    file = new dbfun.Files();
    file.remove('id =' + req.params.id, function(err, res) {
      if(err)
        return  res;
    });
    res.json({  /// Caso ocorra com sucesso
      status: true,
      message: 'Removido com sucesso!'
    });
  });

module.exports = router;