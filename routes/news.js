import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM news ORDER BY date DESC");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { title, date, image, description, location, duration, instructor } = req.body;
  await db.execute(
    "INSERT INTO news (title, date, image, description, location, duration, instructor) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, date, image, description, location, duration, instructor]
  );
  res.json({ message: " News ajoutée" });
});

export default router;
