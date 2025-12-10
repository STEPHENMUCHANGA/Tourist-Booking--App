// src/components/BlogsCarousel.jsx
import React from "react";
import { motion } from "framer-motion";
import blogsData from "../data/blogsData.js"; // your blog seed data

function BlogsCarousel() {
  return (
    <div style={{ overflow: "hidden", width: "100%", margin: "20px 0" }}>
      <motion.div
        style={{ display: "flex" }}
        animate={{ x: ["0%", "-50%"] }} // scroll left
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            style={{
              minWidth: "250px",
              marginRight: "20px",
              padding: "10px",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h4 style={{ marginTop: "10px" }}>{blog.title}</h4>
            <p style={{ fontSize: "0.9rem" }}>{blog.content}</p>
          </div>
        ))}
        {/* duplicate for infinite scroll effect */}
        {blogsData.map((blog) => (
          <div
            key={"dup-" + blog.id}
            style={{
              minWidth: "250px",
              marginRight: "20px",
              padding: "10px",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h4 style={{ marginTop: "10px" }}>{blog.title}</h4>
            <p style={{ fontSize: "0.9rem" }}>{blog.content}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default BlogsCarousel;
