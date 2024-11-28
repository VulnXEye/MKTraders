import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contactus.css'

const Contactus = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    context: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.context,
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Enquiry sent successfully!')
          setForm({ name: '', email: '', phone: '', context: '' })
        },
        (error) => {
          alert('Failed to send enquiry. Please try again later.')
        }
      )
  }
  return (
    <div className="contact-us">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>
          <strong>Name:</strong> MKTraders
        </p>
        <p>
          <strong>Phone Number:</strong> +91 9876543210
        </p>
        <p>
          <strong>Email:</strong> info@mktraders.com
        </p>
        <p>
          <strong>Address:</strong> 123, Paint Tools Street, Industrial Area,
          City, Country
        </p>
      </div>
      <div className="enquiry-form">
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Context</label>
            <textarea
              name="context"
              value={form.context}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contactus
