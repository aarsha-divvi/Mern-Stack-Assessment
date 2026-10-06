import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("MONGODB_URI is not defined in .env");
    process.exit(1);
}

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

const Student = mongoose.model("Student", studentSchema);

async function performCRUD() {
    try {
        // CONNECT
        await mongoose.connect("mongodb+srv://aarsha_db_user:fsdexp9@cluster0.ysptc6p.mongodb.net/?appName=Cluster0");
        console.log("Connected to MongoDB Atlas");

        // CREATE
        const student = await Student.create({
            name: "Aditya",
            age: 15,
            course: "Computer Science"
        });

        console.log("\n1. CREATE");
        console.log(student);

        // READ
        const students = await Student.find();

        console.log("\n2. READ");
        console.log(students);

        // UPDATE
        const updatedStudent = await Student.findOneAndUpdate(
            { name: "Aditya" },
            { age: 15 },
            { new: true }
        );

        console.log("\n3. UPDATE");
        console.log(updatedStudent);

        // DELETE
        const deletedStudent = await Student.findOneAndDelete({
            name: "Aditya"
        });

        console.log("\n4. DELETE");
        console.log(deletedStudent);

        await mongoose.disconnect();

        console.log("\nMongoDB connection closed.");
    } catch (error) {
        console.error("Error:", error);
    }
}

performCRUD();