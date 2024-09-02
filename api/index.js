const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
    const word = sortedArray.join('');

    res.json({ word });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
