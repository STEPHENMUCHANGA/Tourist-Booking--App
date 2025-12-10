import React, { useState } from 'react';

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    site: '',
    date: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Booking successful for ${form.name} at ${form.site} on ${form.date}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h3>Book a Tourist Site</h3>
      <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
      <input type="text" name="site" placeholder="Tourist Site" value={form.site} onChange={handleChange} required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
