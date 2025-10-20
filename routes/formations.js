import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM formations");
  res.json(rows);
});

router.post("/", async (req, res) => {
  const { title, duration, image, description, instructor, date_start, location } = req.body;
  await db.execute(
    "INSERT INTO formations (title, duration, image, description, instructor, date_start, location) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, duration, image, description, instructor, date_start, location]
  );
  res.json({ message: " Formation ajoutée" });
});

export default router;
