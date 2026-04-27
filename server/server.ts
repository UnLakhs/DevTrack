import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./db/connection";
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";

const PORT = 8080;

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
  
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

    
    app.use("/api/auth", authRoutes);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
