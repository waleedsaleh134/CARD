// GuestForm.js
import React, { useState } from 'react';
import guestService from '../services/guestService';

const GuestForm = () => {
  const [name, setName] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const generateQrID = () => {
      return Math.random().toString(36).substr(2, 9);
    };
    const newGuest = { name, whatsApp, numOfPeople, qrID: generateQrID() };
    try {
      await guestService.createGuest(newGuest);
      alert('Guest added successfully!');
      // Reset the form
      setName('');
      setWhatsApp('');
      setNumOfPeople('');
    } catch (error) {
      console.error('Error adding guest:', error);
      alert('Failed to add guest. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>WhatsApp:</label>
        <input
          type="text"
          value={whatsApp}
          onChange={(e) => setWhatsApp(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Number of People:</label>
        <input
          type="number"
          value={numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Guest</button>
    </form>
  );
};

export default GuestForm;
