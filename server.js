import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./db.js";

import membersRouter from "./routes/members.js";
import formationsRouter from "./routes/formations.js";
import newsRouter from "./routes/news.js";

dotenv.config();
const app = express();

// Allow frontend URLs to access backend
app.use(cors({
  origin: ["http://localhost:3000", "https://csclub-topaz.vercel.app"]
}));

app.use(express.json());

// Root route
app.get("/", (req, res) => res.send("CS Club API is running"));

// API routes
app.use("/api/members", membersRouter);
app.use("/api/formations", formationsRouter);
app.use("/api/news", newsRouter);

// Start server on dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
