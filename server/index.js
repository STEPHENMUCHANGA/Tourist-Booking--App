const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const attractionRoutes = require('./routes/attractionRoutes');
const blogRoutes = require('./routes/blogRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// -----------------------------
// MongoDB Connection Handling
// -----------------------------

// Determine environment
const isProduction = process.env.NODE_ENV === "production";

// Decide which Mongo URI to use
const mongoURI = isProduction
  ? process.env.MONGO_URI_PROD        // For deployment (Render)
  : process.env.MONGO_URI_DEV;        // For local dev

if (!mongoURI) {
  console.error("❌ ERROR: MongoDB URI is missing in .env file");
  console.error("Expected MONGO_URI_DEV or MONGO_URI_PROD");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// -----------------------------
// Routes
// -----------------------------
app.use('/api/auth', authRoutes);
app.use('/api/attractions', attractionRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/weather', weatherRoutes);

// -----------------------------
// Server start
// -----------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

