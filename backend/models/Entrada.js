const Schema = require("mongoose").Schema;

const entradaSchema = new require("mongoose").Schema({
    title:{
        type:String,
        required:true
    },
    entradas:[{
        type:Schema.Types.ObjectId,
        ref:"Comentario"
    }]
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = require("mongoose").model("Entrada", entradaSchema);