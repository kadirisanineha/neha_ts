const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { ensureAuthenticated } = require('../middleware/auth');

// Create Project
router.post('/', ensureAuthenticated, async (req, res) => {
  try {
    const project = new Project({ ...req.body, members: [req.user._id] });
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get All Projects
router.get('/', ensureAuthenticated, async (req, res) => {
  const projects = await Project.find().populate('team members', 'name');
  res.status(200).json(projects);
});

module.exports = router;
