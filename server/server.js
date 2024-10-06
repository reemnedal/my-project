const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.get('/products', async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
