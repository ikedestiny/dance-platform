const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pin' }]
});

module.exports = mongoose.model('Board', boardSchema);