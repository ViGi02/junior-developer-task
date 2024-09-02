const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON bodies

app.post('/webhook', (req, res) => {
    const { data } = req.body;
    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid data' });
    }

    const sortedArray = data.split('').sort();
    res.json({ word: sortedArray });
});

module.exports = app;