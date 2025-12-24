import express from "express";
import { sendMessage } from "../server.js";

const router = express.Router();

// POST /api/contact
router.post("/", sendMessage);

export default router;

