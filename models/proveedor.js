const mongoose = require('mongoose')

// El modelo que se cree aca debe ser igual al de la base de datos

const proveedorSchema = mongoose.Schema({
    nombres: {
        type: String,
        required : true
    },
    nit: {
        type: Number,
        required : true
    },
    tipoProduct: {
        type: String,
        required : true
    },
    correo: {
        type: String,
        required : true
    },
    telefono: {
        type: Number,
        required : true
    },
    direccion: {
        type: String,
        required : true
    }
},{versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema)
