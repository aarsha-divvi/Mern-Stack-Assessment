import express, { Request, Response, NextFunction } from "express";

const app = express();

// Logging Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome!");
});

app.get("/about", (req: Request, res: Response) => {
    res.send("About Page");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});