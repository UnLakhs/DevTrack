import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./db/connection";

import bcrypt from "bcryptjs";

const PORT = 8080;

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

async function startServer() {
  try {
    const client = await connectDB();
    const db = client.db("DevTrack");
    console.log("Connected to MongoDB");

    app.get("/api", (req: Request, res: Response) => {
      res.json({ fruits: ["apple", "banana", "orange"] });
    });

    app.get("/api/collections", async (req: Request, res: Response) => {
      const collections = await db.listCollections().toArray();
      res.json(collections);
    });

    //auth routes

    //register
    app.get("/api/auth/register", async(req: Request, res: Response) => {
      try {
        const {email, password, confirmPassword} = req.body;

        if(!email || !password || !confirmPassword) {
          return res.status(400).json({message: "All fields are required"});
        }

        if(password !== confirmPassword) {
          return res.status(400).json({message: "Passwords do not match"});
        }

        if(password.length < 6) {
          return res.status(400).json({message: "Password must be at least 6 characters long"});
        }

        const existingUser = await db.collection("users").findOne({email});
        if(existingUser) {
          return res.status(400).json({message: "A user already exists with this email"});
        }

        const hashedPasswrd = await bcrypt.hash(password, 10);
        const result = await db.collection("users").insertOne({email, password: hashedPasswrd, createdAt: new Date()});

        return res.status(201).json({message: "User registered successfully", userId: result.insertedId});


      } catch(error) {
        console.error("Error in registration:", error);
        return res.status(500).json({message: "Internal server error"});
      }
    })
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
