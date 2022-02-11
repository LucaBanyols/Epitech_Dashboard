const express = require('express');
const about = require('./about.json');
const router = express.Router();

router.get('/about.json', async (req, res) => {
    res.send(about);
});

module.exports = router;