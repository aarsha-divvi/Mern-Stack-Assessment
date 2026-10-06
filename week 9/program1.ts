import mongoose from "mongoose";
import dotenv from "dotenv";

// Load variables from .env
dotenv.config();

// Get MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("Error: MONGODB_URI is not defined in .env");
    process.exit(1);
}

// Create Student schema
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

// Create Student model
const Student = mongoose.model("Student", studentSchema);

// Connect to MongoDB Atlas
async function connectDatabase(): Promise<void> {
    try {
        await mongoose.connect("mongodb+srv://aarsha_db_user:fsdexp9@cluster0.ysptc6p.mongodb.net/?appName=Cluster0");

        console.log("MongoDB Atlas connected successfully!");

        // Insert a student
        const student = await Student.create({
            name: "Aarsha",
            age: 20,
            course: "MERN Stack"
        });

        console.log("Student created successfully:");
        console.log(student);

        // Close database connection
        await mongoose.disconnect();

        console.log("MongoDB connection closed.");
    } catch (error) {
        console.error("Database connection failed:");
        console.error(error);
    }
}

// Run the program
connectDatabase();