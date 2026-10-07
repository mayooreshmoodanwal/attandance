const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const products = require('./data');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: "Welcome to DummyJson API"})
})

app.get("/products", (req, res) => {
    res.json(products);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
