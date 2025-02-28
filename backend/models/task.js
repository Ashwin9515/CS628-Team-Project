// backend/models/task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' } // Reference to the subject model
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
