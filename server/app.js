require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const mainRouter = require("./router/router"); 
const productRoutes = require("./router/productsRoutes"); 

const port = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", mainRouter); 
app.use("/products", productRoutes); 

// Database Connection
mongoose.connect("mongodb+srv://zubairjaved1014:test12345@cluster0.lebll.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connection established"))
    .catch((err) => console.log("DB connection error:", err));

// Default route for checking server status
app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
