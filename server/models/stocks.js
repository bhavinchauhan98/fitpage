const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    tag: {
        type: String
    },
    color: {
        type: String
    },
    criteria: {
        type: Array
    }
});

module.exports = mongoose.model('Stock', stockSchema);