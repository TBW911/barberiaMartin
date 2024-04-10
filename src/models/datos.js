const mongoose = require("mongoose");

const datoSchema = mongoose.Schema({
    elemento: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    fechaHora: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('datos', datoSchema);