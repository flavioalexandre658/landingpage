

const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
var dbfun = require('../models/db');

//Criptografia da senha
var sha1 = require('sha1');

function verifyJWT(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

router.post('/addUsuario', verifyJWT, function (req, res) {   /// Cadastra um novo usuario

    let user = { /// Recebe os dados da view para serem cadastrados
        email: req.body.email,
        senha: (req.body.senha != undefined) || (req.body.senha != null) ? sha1(req.body.senha) : undefined,
        nome: req.body.nome,
    }

    listUser = [user.email, user.senha]
    let verify = listUser.map((a) => a == undefined).reduce((a, b) => a || b)
    if (!verify) {
        usuario = new dbfun.Usuario() /// Conexão com o banco
        usuario.query(
            "select count(`usuario`.`email`) as `existe` " +
            "from `landingpage`.`usuario` " +
            "where `usuario`.`email` = '" + user.email + "';"
            , function (err, rows, fields) {
                if (rows[0].existe >= 1) {
                    res.json({
                        status: false,
                        message: 'Email existente'
                    });
                } else {
                    usuario.query("INSERT INTO `landingpage`.`usuario`(`nome`,`email`,`senha`)VALUES('"
                        + req.body.nome + "','"
                        + req.body.email + "','"
                        + user.senha + "');", function (err) {
                            if (err) {
                                res.json({
                                    status: false,
                                    message: 'Erro ao cadastrar usuário'
                                });
                            } else {
                                res.json({
                                    status: true,
                                    message: 'Novo usuário cadastrado'
                                });
                            }
                        });
                }

            });
    } else {
        res.json({
            status: false,
            message: "E-mail inválido!"
        });
    }
});

router.get('/getUsuario/:user_id', function (req, res) {
    usuario = new dbfun.Usuario();
    usuario.find('all', {
        where: 'id =' + req.params.user_id
    }, function (err, rows) {
        if (err) throw err;
        res.json(rows);
    });

});

router.post('/auth', function (req, res) {
    usuariof = new dbfun.Usuario();
    var r = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/;
    var email = req.body.email.match(r);
    var senha = sha1(req.body.senha);
    if (email != null) {
        email = email[0];
        usuariof.find('all', {
            fields: ['email', 'id', 'senha', 'nome'],
            where: "email=\"" + email + "\""
        }, function (err, rows, fields) {

            if (err) throw err;
            var user = null;
            if (rows[0]) {
                
                user = {
                    id: rows[0].id,
                    nome: rows[0].nome,
                    senha: rows[0].senha
                };
            }
            if (!user) {
                res.json({
                    status: false,
                    message: 'Usuário Não Encontrado'
                });
            } else if (user) {
                console.log(user.senha)
                console.log(senha)
                //verifica se a senha esta correta
                if (user.senha != String('admin')) {

                    res.json({
                        status: false,
                        message: 'Senha Incorreta'
                    });
                } else {
                    // Se a conta for encontrada e a senha bater com a verdadeira
                    // Cria uma token
                    var token = jwt.sign(user, process.env.SECRET, {
                        expiresIn: 24 * 60 * 60 * 1 // Expira em 1 hours
                    });

                    res.json({
                        status: true,
                        message: 'Bem-vindo(a)!, ' + user.nome,
                        token: token,
                        id: user.id,
                        name: user.nome
                    });
                }
            }
        })
    } else {
        res.json({
            status: false,
            message: 'Usuário Não Encontrado'
        });
    }
});

router.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        // Faz verificação da Token
        jwt.verify(token, dbfun.secret, function (err, token_decoded) {
            if (err) {
                // Se a verificação falhar
                console.log(req.headers['x-access-token']);
                return res.json({
                    status: false,
                    message: "Falha ao autenticar o acesso."
                });
            } else {
                // Token é verificada, Salva as informações
                req.token = token_decoded;
                req.user = token_decoded.user;
                req.authenticated = true;
                next();
            }

        });
    }
});

module.exports = router;