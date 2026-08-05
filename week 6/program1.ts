import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Welcome",
        status: "Active"
    });
});

app.get("/students", (req: Request, res:Response) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});

app.get("/product/:id", (req: Request, res: Response) => {
    res.json({
        productId: req.params.id,
        category: "Electronics"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});