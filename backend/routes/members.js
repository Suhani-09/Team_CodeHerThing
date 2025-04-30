const express = require('express');
const multer = require('multer');
const path = require('path');
const Member = require('../models/Member');
const router = express.Router();

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// POST route to create a new member
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const {
      name,
      roll,
      degree,
      project,
      hobbies,
      certificate,
      internship,
      aboutAim
    } = req.body;

    const image = req.file ? req.file.filename : null;

    const member = new Member({
      name,
      roll,
      degree,
      project,
      hobbies,
      certificate,
      internship,
      aboutAim,
      image
    });

    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET route to fetch all members
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// GET route to fetch a single member by ID
router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
