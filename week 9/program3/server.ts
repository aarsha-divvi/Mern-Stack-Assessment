import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = 3000;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("MONGODB_URI is not defined in .env");
    process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET - Get all students
app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching students"
        });
    }
});

// POST - Add student
app.post("/api/students", async (req, res) => {
    try {
        const student = await Student.create({
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        });

        res.status(201).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error creating student"
        });
    }
});

// PUT - Update student
app.put("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                course: req.body.course
            },
            { new: true }
        );

        if (!student) {
            res.status(404).json({
                message: "Student not found"
            });
            return;
        }

        res.json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error updating student"
        });
    }
});

// DELETE - Delete student
app.delete("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            res.status(404).json({
                message: "Student not found"
            });
            return;
        }

        res.json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error deleting student"
        });
    }
});

// Start server
async function startServer() {
    try {
        await mongoose.connect("mongodb+srv://aarsha_db_user:fsdexp9@cluster0.ysptc6p.mongodb.net/?appName=Cluster0");

        console.log("MongoDB Atlas connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);
    }
}

startServer();