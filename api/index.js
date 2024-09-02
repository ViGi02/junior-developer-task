const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON bodies

// Root route to handle GET requests
app.get('/', (req, res) => {
    res.send('Welcome to the Webhook API');
});

// Webhook route to handle POST requests
app.post('/webhook', (req, res) => {
    const { data } = req.body;
    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid data' });
    }

    const sortedArray = data.split('').sort();
    res.json({ word: sortedArray });
});

module.exports = app;
