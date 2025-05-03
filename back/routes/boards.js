const express = require('express');
const Board = require('../models/Board');
const router = express.Router();

// Create board
router.post('/', async (req, res) => {
    try {
        const { title, userId } = req.body;
        const board = new Board({ title, user: userId });
        await board.save();
        res.status(201).json(board);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get user boards
router.get('/user/:userId', async (req, res) => {
    const boards = await Board.find({ user: req.params.userId });
    res.json(boards);
});

module.exports = router;