const mongoose = require("mongoose");

const studySessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("StudySession", studySessionSchema);
