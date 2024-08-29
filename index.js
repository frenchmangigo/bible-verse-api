const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/bible', async (req, res) => {
  try {
    const response = await axios.get('https://bible-api.com/?random=verse');
    const verseData = response.data;
    const verse = verseData.text;
    const reference = `${verseData.reference}`;
    
    res.json({ verse, reference });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the Bible verse.' });
  }
});

app.listen(port, () => {
  console.log(`Bible verse API running at http://localhost:${port}`);
});
