"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Create Express application
const app = express();
// Set port number
const PORT = 3000;
// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome SVECW!</h1><p>You have reached the Home Page.</p>");
});
// About Route
app.get("/about", (req, res) => {
    res.send("This server was built as a learning exercise for Express.js.");
});
// JSON Route
app.get("/api/status", (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
});
