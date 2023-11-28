// components/ContactForm.js
import React, { useState } from 'react';
import Header from '../component/header/Header';

const ContactUs = ({ onSendMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageTitle, setMessageTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation can be added here

    // Send data to parent component
    onSendMessage({ name, email, messageTitle, message });

    // Clear form fields
    setName('');
    setEmail('');
    setMessageTitle('');
    setMessage('');
  };

  return (
    <div>
        <Header />
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Message Title:</label>
        <input type="text" value={messageTitle} onChange={(e) => setMessageTitle(e.target.value)} required />

        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
