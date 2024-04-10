const mongoose = require("mongoose");

const elementoSchema = mongoose.Schema({
    elemento:{
        type: String,
        required: true
    },
    statusdato: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('elemento', elementoSchema);