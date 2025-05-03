const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
    url: { type: String, required: true }, // Cloudinary URL
    type: { type: String, enum: ['image', 'video'], required: true },
    tags: [{ type: String }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' }
});

module.exports = mongoose.model('Pin', pinSchema);