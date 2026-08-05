import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Express!");
});

app.get("/user/:id", (req: Request, res: Response) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.get("/student/:name/:roll", (req: Request, res: Response) => {
    const { name, roll } = req.params;
    res.send(`Name: ${name}, Roll No: ${roll}`);
});

app.get("/search", (req: Request, res: Response) => {
    const { name, age } = req.query;
    res.json({ name, age });
});

app.get("/product/:id", (req: Request, res: Response) => {
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