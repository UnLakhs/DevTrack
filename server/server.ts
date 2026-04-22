import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();

app.use(cors(corsOptions));

app.get("/api", (req: Request, res: Response) => {
  res.json({ fruits: ["apple", "banana", "orange"] });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
