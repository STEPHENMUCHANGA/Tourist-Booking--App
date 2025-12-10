import React from 'react';
import Blog from '../components/Blog';
import blogsData from '../data/blogsData.js';

function BlogPage() {
  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Blogs</h2>
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {blogsData.map(blog => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
