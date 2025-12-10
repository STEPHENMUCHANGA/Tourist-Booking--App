import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminPage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editBlogId, setEditBlogId] = useState(null); // store blog id being edited

  const API_URL = "http://localhost:4000/api/blogs"; // change if needed

  // Fetch all blogs on mount
  useEffect(() => {
    if (isLoggedIn) fetchBlogs();
  }, [isLoggedIn]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API_URL);
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Login
  const handleLogin = () => {
    if (username === "admin" && password === "admin@123") {
      localStorage.setItem("isAdmin", "true");
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      alert("Incorrect username or password!");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    navigate("/admin-login");
  };

  // Image change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit blog (create or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || (!image && !editBlogId)) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      if (editBlogId) {
        // Edit existing blog
        await axios.put(`${API_URL}/${editBlogId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog updated successfully!");
      } else {
        // Create new blog
        await axios.post(API_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Blog posted successfully!");
      }

      setTitle("");
      setDescription("");
      setImage(null);
      setEditBlogId(null);
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("Error saving blog.");
    }
  };

  // Edit blog
  const handleEdit = (blog) => {
    setEditBlogId(blog._id);
    setTitle(blog.title);
    setDescription(blog.description);
    setImage(null); // new image optional
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchBlogs();
      } catch (err) {
        console.error(err);
        alert("Error deleting blog.");
      }
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto", textAlign: "center" }}>
      {isLoggedIn ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2>Admin Dashboard</h2>
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 16px",
                backgroundColor: "#004080",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Logout
            </button>
          </div>

          <hr style={{ margin: "20px 0" }} />

          <h3>{editBlogId ? "Edit Blog" : "Post a New Blog"}</h3>
          <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ padding: "10px", width: "80%", margin: "10px 0" }}
            />
            <br />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ padding: "10px", width: "80%", height: "100px", margin: "10px 0" }}
            />
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <br />
            <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
              {editBlogId ? "Update Blog" : "Post Blog"}
            </button>
          </form>

          <h3>All Blogs</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {blogs.map((blog) => (
              <div key={blog._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "250px" }}>
                <img
                  src={`http://localhost:4000/${blog.image}`}
                  alt={blog.title}
                  style={{ width: "100%", borderRadius: "6px" }}
                />
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <button
                  onClick={() => handleEdit(blog)}
                  style={{ padding: "5px 10px", marginRight: "5px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none" }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", width: "250px", marginTop: "10px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", width: "250px", marginTop: "10px" }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{ marginTop: "10px", padding: "10px 20px" }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default AdminPage;
