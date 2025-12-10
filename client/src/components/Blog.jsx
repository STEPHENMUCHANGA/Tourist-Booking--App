import React from 'react';

function Blog({ blog }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '15px', borderRadius: '8px' }}>
      <h3>{blog.title}</h3>
      <img src={blog.image} alt={blog.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{blog.content}</p>
    </div>
  );
}

export default Blog;
