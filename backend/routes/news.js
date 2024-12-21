const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Fetch All News
router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add News Article
router.post('/', async (req, res) => {
    const news = new News({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        publishedAt: req.body.publishedAt
    });
    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
