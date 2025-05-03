const express = require('express');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const Pin = require('../models/Pin');
const router = express.Router();

// Configure Multer
const upload = multer({ dest: 'uploads/' });

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload pin
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const { userId, boardId, tags } = req.body;
        const file = req.file;

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(file.path, {
            folder: 'dance_pins',
            resource_type: file.mimetype.startsWith('video') ? 'video' : 'image'
        });

        // Save pin to MongoDB
        const pin = new Pin({
            url: result.secure_url,
            type: file.mimetype.startsWith('video') ? 'video' : 'image',
            tags: tags.split(','), // Assume tags are comma-separated
            user: userId,
            board: boardId
        });
        await pin.save();

        res.json(pin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all pins (for feed)
router.get('/', async (req, res) => {
    const pins = await Pin.find().populate('user', 'username');
    res.json(pins);
});

// Search pins by tag
router.get('/search', async (req, res) => {
    const { tag } = req.query;
    const pins = await Pin.find({ tags: tag }).populate('user', 'username');
    res.json(pins);
});

module.exports = router;