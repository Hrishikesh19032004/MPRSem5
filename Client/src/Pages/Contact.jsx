import React, { useState, useEffect } from "react";
import "../Styles/ContactUs.css";
import { useAuth } from "../store/auth";

const Contact = () => {
  const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(defaultContactFormData);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const responseData = await response.json();
        alert(responseData);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <section className="section-contact">
        <div className="container grid grid-two-cols">
          {}
          <div className="contact-info">
            <h1 className="contact-title" style={{ fontSize: "4rem", fontWeight: "100" }}>
              Get in Touch
            </h1>
            <p className="contact-subtitle" style={{ fontSize: "2rem", fontWeight: "100" }}>
              We'd love to hear from you! Whether you have questions about our courses, need support, or just want to say hello, feel free to reach out.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <h3 style={{ fontSize: "1.8rem", fontWeight: "100", color: "#f8f9fa" }}>Email</h3>
                <p style={{ fontSize: "1.6rem", fontWeight: "100" }}>support@stockedtsec.com</p>
              </div>
              <div className="contact-item">
                <h3 style={{ fontSize: "1.8rem", fontWeight: "100", color: "#f8f9fa" }}>Phone</h3>
                <p style={{ fontSize: "1.6rem", fontWeight: "100" }}>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h3 style={{ fontSize: "1.8rem", fontWeight: "100", color: "#f8f9fa" }}>Address</h3>
                <p style={{ fontSize: "1.6rem", fontWeight: "100" }}>
                  123 Finance Street
                  <br />
                  Investment City, IC 45678
                </p>
              </div>
            </div>
          </div>

          {}
          <div className="contact-form">
            <h2 className="form-title" style={{ fontSize: "3rem", fontWeight: "100" }}>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" style={{ fontSize: "1.6rem", fontWeight: "100" }}>Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ fontSize: "1.6rem", fontWeight: "100" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ fontSize: "1.6rem", fontWeight: "100" }}>Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn submit-btn"
                style={{ backgroundColor: "#dc2f02", color: "black" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
