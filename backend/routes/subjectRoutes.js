// backend/routes/subjectRoutes.js

const express = require('express');
const { createSubject, getSubjects, updateSubject, deleteSubject } = require('../controllers/subjectController');

const router = express.Router();

// Routes for subjects
router.post('/subjects', createSubject); // Create new subject
router.get('/subjects', getSubjects); // Get all subjects
router.put('/subjects/:id', updateSubject); // Update subject by ID
router.delete('/subjects/:id', deleteSubject); // Delete subject by ID

module.exports = router;
