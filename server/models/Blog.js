const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
