const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/getCatFact', async (req, res) => {
    const response = await axios.get('https://catfact.ninja/fact');
    return res.status(200).json(response.data);
});

app.listen(5000, () => {
    console.log(`🚩Server is running on port 5000`);
});

