const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  whatsApp: { type: String, required: true },
  numOfPeople: { type: Number, required: true },
  qrID: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Guest', guestSchema);
