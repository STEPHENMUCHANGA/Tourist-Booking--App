import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <div>
      <Header />
      <div className="container" style={{ textAlign: 'center', margin: '50px 0' }}>
        <h2>404 - Page Not Found</h2>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
