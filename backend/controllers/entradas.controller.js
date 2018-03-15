const Entrada = require("../models/Entrada");

exports.deleteEntrada = (req,res,next)=>{
  Entrada.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchEntrada = (req,res,next)=>{
  Entrada.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getEntradas = function(req, res, next) {
    Entrada.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

  exports.postEntrada = (req, res, next)=>{
    const newEntrada = new Entrada({
      title: req.body.title,
    comentario: req.body.comentario
    });

    newEntrada.save()
    .then(item=>res.status(201).json(item))
    .catch(e=>res.status(500).send(e));

  }
