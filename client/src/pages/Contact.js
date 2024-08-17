import React from "react";
import Layout from "./../components/Layout/Layout";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import  { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast"; 
import '../styles/ContactForm.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    try {
      const response = await axios.post('/api/v1/contact/contactMail', formData);
      toast.success(response.data.message);
      console.log('Form Data Submitted:', response.data);
    } catch (error) {
      console.error(error);
  };
  }
  return (
    <Layout title={"Contact us"}>
      
      <div className="row contactus  margin-120 ">
      <h1 className="bg-dark p-2 mt-auto text-white text-center"> CONTACT US </h1>
        <div className="col-md-6 ">
        <h1 className="bg-dark p-2 mt-auto text-white text-center"> CONTACT US </h1>
          <img
            src="/images/contactus.jpeg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
      </div>
    </Layout>
  );
};

export default Contact;
