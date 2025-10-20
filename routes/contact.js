import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  await db.execute(
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
    [name, email, message]
  );
  res.json({ message: " Message envoyé avec succès" });
});

router.get("/", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM contact_messages ORDER BY created_at DESC");
  res.json(rows);
});

export default router;
