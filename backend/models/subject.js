// backend/models/subject.js

const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relatedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] // Related tasks linked to this subject
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
