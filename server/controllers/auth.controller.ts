import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { connectDB } from "../db/connection";

//Sign Up
export async function register(req: Request, res: Response) {
  try {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const client = await connectDB();
    const db = client.db("DevTrack");

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: "User registered successfully",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

//Sign In (To be implemented)
export async function login(req: Request, res: Response) {}
//Get current user (To be implemented)
export async function getCurrentUser(req: Request, res: Response) {}