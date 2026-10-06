"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => res.json({ msg: "Welcome" }));
app.get("/user/:id", (req, res) => res.json({ id: req.params.id, name: req.query.name }));
app.post("/user", (req, res) => res.json(req.body));
app.put("/user/:id", (req, res) => res.json({ id: req.params.id, data: req.body }));
app.delete("/user/:id", (req, res) => res.json({ deleted: req.params.id }));
app.listen(3000, () => console.log("Server running"));
