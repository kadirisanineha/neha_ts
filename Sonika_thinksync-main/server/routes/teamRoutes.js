const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const { ensureAuthenticated } = require('../middleware/auth');

// Create Team
router.post('/', ensureAuthenticated, async (req, res) => {
  const { name, members } = req.body;
  try {
    const team = new Team({ name, members: [...members, req.user._id] });
    const savedTeam = await team.save();
    res.status(201).json(savedTeam);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get All Teams
router.get('/', ensureAuthenticated, async (req, res) => {
  const teams = await Team.find().populate('members projects', 'name title');
  res.status(200).json(teams);
});

module.exports = router;
