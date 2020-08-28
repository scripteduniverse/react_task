const express = require("express");
const getData = require("./getData");
const cors = require("cors");
const app = express();
const path = require('path');
app.use(cors());
const port = process.env.PORT || 4001;
app.use("/goods", (req, res) => {
    const data = getData();
    res.json(data);
});

app.use("/rate", (req, res) => {
    const rate = (Math.floor(Math.random() * (80 - 20 + 1)) + 20)
    res.json(rate);
});

app.use(express.static('public'));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(port, () => console.log('The server is running!', port));