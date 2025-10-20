import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./db.js";

import membersRouter from "./routes/members.js";
import formationsRouter from "./routes/formations.js";
import newsRouter from "./routes/news.js";

dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => res.send("CS Club API is running"));
app.use("/api/members", membersRouter);
app.use("/api/formations", formationsRouter);
app.use("/api/news", newsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
