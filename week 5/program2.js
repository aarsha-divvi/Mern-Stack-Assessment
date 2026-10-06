"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Welcome to Express!");
});
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
app.get("/student/:name/:roll", (req, res) => {
    const { name, roll } = req.params;
    res.send(`Name: ${name}, Roll No: ${roll}`);
});
app.get("/search", (req, res) => {
    const { name, age } = req.query;
    res.json({ name, age });
});
app.get("/product/:id", (req, res) => {
    const productId = req.params.id;
    const category = req.query.category;
    res.json({
        productId,
        category
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
