const Comentario = require("../models/Comentario");

exports.deleteComentario = (req,res,next)=>{
  Comentario.findByIdAndRemove(req.params.id)
  .then(comentarios=>res.status(200).json(comentarios))
  .catch(e=>res.status(500).send(e));
}

exports.patchComentario = (req,res,next)=>{
  Comentario.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(comentario=>res.status(200).json(comentario))
  .catch(e=>res.status(500).send(e));
}

exports.getComentarios = function(req, res, next) {
    Comentario.find()
    .populate("entradas")
    .then(comentarios=>res.status(200).json(comentarios))
    .catch(e=>res.status(500).send(e));
  }

  exports.postComentario = (req, res, next)=>{
    const newComentario = new Comentario(req.body);

    newComentario.save()
    .then(comentario=>res.status(201).json(comentario))
    .catch(e=>res.status(500).send(e));

  }

  