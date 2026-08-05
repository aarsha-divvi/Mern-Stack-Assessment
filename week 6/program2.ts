import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => res.json({ msg: "Welcome" }));

app.get("/user/:id", (req: Request, res: Response) =>
    res.json({ id: req.params.id, name: req.query.name })
);

app.post("/user", (req: Request, res: Response) =>
    res.json(req.body)
);

app.put("/user/:id", (req: Request, res: Response) =>
    res.json({ id: req.params.id, data: req.body })
);

app.delete("/user/:id", (req: Request, res: Response) =>
    res.json({ deleted: req.params.id })
);

app.listen(3000, () => console.log("Server running"));