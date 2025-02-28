// backend/controllers/subjectController.js

const Subject = require('../models/subject');

// Create a new subject
const createSubject = async (req, res) => {
  const { name } = req.body;

  try {
    const newSubject = new Subject({ name });
    await newSubject.save();
    res.status(201).json({ message: 'Subject created successfully', subject: newSubject });
  } catch (err) {
    res.status(500).json({ message: 'Error creating subject', error: err.message });
  }
};

// Get all subjects
const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching subjects', error: err.message });
  }
};

// Update a subject
const updateSubject = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedSubject = await Subject.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedSubject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ message: 'Subject updated successfully', subject: updatedSubject });
  } catch (err) {
    res.status(500).json({ message: 'Error updating subject', error: err.message });
  }
};

// Delete a subject
const deleteSubject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSubject = await Subject.findByIdAndDelete(id);
    if (!deletedSubject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ message: 'Subject deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting subject', error: err.message });
  }
};

module.exports = { createSubject, getSubjects, updateSubject, deleteSubject };
