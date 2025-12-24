import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "../routes/contactRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/contacts", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server running successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

