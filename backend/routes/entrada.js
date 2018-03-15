var express = require('express');
var router = express.Router();
const controller = require("../controllers/entradas.controller");

router.get('/', controller.getEntradas);
router.post('/', controller.postEntrada);
router.patch('/:id', controller.patchEntrada);
router.delete('/:id', controller.deleteEntrada);

module.exports = router;