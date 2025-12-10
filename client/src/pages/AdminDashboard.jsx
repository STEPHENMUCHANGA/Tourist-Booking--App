import React, { useState } from 'react';

function AdminDashboard() {
  const [blog, setBlog] = useState({ title: '', content: '', image: '' });

  const handleChange = e => setBlog({ ...blog, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Blog saved!'); // Replace with API call to save in server
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={blog.title} onChange={handleChange} required />
        <textarea name="content" placeholder="Content" value={blog.content} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={blog.image} onChange={handleChange} />
        <button type="submit">Save Blog</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
