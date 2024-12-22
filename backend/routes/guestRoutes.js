const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');

// Create Guest
router.post('/', async (req, res) => {
  const { name, whatsApp, numOfPeople, qrID } = req.body;
  const newGuest = new Guest({ name, whatsApp, numOfPeople, qrID });
  try {
    const guest = await newGuest.save();
    res.status(201).json(guest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Guests
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
