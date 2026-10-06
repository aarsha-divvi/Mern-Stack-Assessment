"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Logging Middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.get("/", (req, res) => {
    res.send("Welcome!");
});
app.get("/about", (req, res) => {
    res.send("About Page");
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
