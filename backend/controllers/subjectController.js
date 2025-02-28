// backend/controllers/subjectController.js
const Subject = require('../models/subject');

// Create a new subject
exports.createSubject = async (req, res) => {
  const { name } = req.body;
  try {
    const subject = new Subject({ name });
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json({ message: 'Error creating subject', error: error.message });
  }
};

// Get all subjects
exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching subjects', error: error.message });
  }
};

// Update subject
exports.updateSubject = async (req, res) => {
  const { name } = req.body;
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, { name }, { new: true });
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json(subject);
  } catch (error) {
    res.status(400).json({ message: 'Error updating subject', error: error.message });
  }
};

// Delete subject
exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json({ message: 'Subject deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting subject', error: error.message });
  }
};
