let moongose = require("mongoose");
let schema = moongose.Schema;
let schemaUsuario = new schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    correo : {
        type: String,
        required: true
    },
});
module.exports = moongose.model("usuarios", schemaUsuario);