
var express = require('express');
var router = express.Router();
const controller = require("../controllers/comentarios.controller");

router.get('/', controller.getComentarios);
router.post('/', controller.postComentario);
router.patch('/:id', controller.patchComentario);
router.delete('/:id', controller.deleteComentario);

module.exports = router;