import express from "express";
import { db } from "../db.js";
const router = express.Router();

// GET tous les membres
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM members");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
