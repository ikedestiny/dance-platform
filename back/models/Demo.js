const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Demo', demoSchema);
