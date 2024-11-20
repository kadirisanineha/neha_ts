const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const { ensureAuthenticated } = require('../middleware/auth'); // Middleware to check user authentication

// Create or Update Profile
router.post('/', ensureAuthenticated, async (req, res) => {
  try {
    const { bio, skills, experience, socialLinks } = req.body;

    // Check if a profile already exists for the user
    let profile = await Profile.findOne({ user: req.user._id });

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: { bio, skills, experience, socialLinks } },
        { new: true }
      );
      return res.status(200).json(profile);
    }

    // Create new profile
    const newProfile = new Profile({
      user: req.user._id,
      bio,
      skills,
      experience,
      socialLinks,
    });

    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Current User's Profile
router.get('/me', ensureAuthenticated, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id }).populate('user', 'name email');
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update Profile
router.put('/me', ensureAuthenticated, async (req, res) => {
  try {
    const { bio, skills, experience, socialLinks } = req.body;

    const updatedProfile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $set: { bio, skills, experience, socialLinks } },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete Profile
router.delete('/me', ensureAuthenticated, async (req, res) => {
  try {
    const deletedProfile = await Profile.findOneAndDelete({ user: req.user._id });

    if (!deletedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
