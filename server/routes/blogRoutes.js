const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Blog = require("../models/Blog");

// -----------------------------
// Multer Storage Config
// -----------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // rename file
  },
});

const upload = multer({ storage });

// -----------------------------
// Create Blog Route (With Image Upload)
// -----------------------------
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image file required" });
    }

    const newBlog = new Blog({
      title,
      content,
      imageUrl: `/uploads/${req.file.filename}`,
    });

    await newBlog.save();

    res.json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// -----------------------------
// Get All Blogs
// -----------------------------
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching blogs" });
  }
});

module.exports = router;
