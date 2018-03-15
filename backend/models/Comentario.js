const Schema = require("mongoose").Schema;

const comentarioSchema = new require("mongoose").Schema({
    title:{
        type:String,
        required:true
    },
    comentarios:{
        type:Schema.Types.ObjectId,
        ref:"Entrada"
    }
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = require("mongoose").model("Comentario", comentarioSchema);