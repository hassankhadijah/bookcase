// components/AddBookForm.js
import React, { useState } from 'react';

const newBook = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation can be added here

    // Send data to parent component
    onAddBook({ title, description, price });

    // Clear form fields
    setTitle('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <button type="submit">Add New Book</button>
      </form>
    </div>
  );
};

export default newBook;
