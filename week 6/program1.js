"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({
        message: "Welcome",
        status: "Active"
    });
});
app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});
app.get("/product/:id", (req, res) => {
    res.json({
        productId: req.params.id,
        category: "Electronics"
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
