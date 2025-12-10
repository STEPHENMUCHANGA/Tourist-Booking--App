import React from 'react';

function Contact() {
  return (
    <section style={{ padding: '20px', background: '#f0f0f0' }}>
      <h3>Contact Us for Bookings and Inquiries</h3>

      {/* Clickable Phone / WhatsApp */}
      <p>
        Mobile/WhatsApp:{" "}
        <a
          href="https://wa.me/254712935963"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'underline' }}
        >
          +254712935963
        </a>
      </p>

      {/* Clickable Email */}
      <p>
        Email:{" "}
        <a
          href="mailto:stephenmuchanga@gmail.com?subject=Booking%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20inquire%20about..."
          style={{ color: '#007bff', textDecoration: 'underline' }}
        >
          stephenmuchanga@gmail.com
        </a>
      </p>
    </section>
  );
}

export default Contact;
