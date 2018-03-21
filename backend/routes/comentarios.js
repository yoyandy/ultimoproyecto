
var express = require('express');
var router = express.Router();
const controller = require("../controllers/comentarios.controller");
const Comentario = require('../models/Comentario');

router.get('/', controller.getComentarios);
router.post('/', controller.postComentario);
router.patch('/:id', controller.patchComentario);
router.delete('/:id', controller.deleteComentario);

router.get('/:id', function(req, res, next) {
    Comentario.findById(req.params.id)
        .then(singleComentario => res.json(singleComentario))
})

module.exports = router;