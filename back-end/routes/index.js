const express = require('express');
const router = express.Router();

router.use('/', require('./produtos'));
router.use('/', require('./informacoes'));
router.use('/', require('./motivos'));
router.use('/', require('./pilhas'));
router.use('/', require('./avaliacoes'));
router.use('/', require('./precos'));
router.use('/', require('./rodape'));
router.use('/', require('./files'));

module.exports = router;