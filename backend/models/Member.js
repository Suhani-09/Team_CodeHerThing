const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  roll: {
    type: String,
    required: true,
    unique: true  // <-- Ensure roll number is unique
  },
  degree: String,
  project: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aboutAim: String,
  image: String
});

module.exports = mongoose.model('Member', memberSchema);
