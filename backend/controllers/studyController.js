const StudySession = require("../models/StudySession");

const createStudySession = async (req, res) => {
  const { title, duration } = req.body;
  const userId = req.user.id;

  try {
    const newSession = new StudySession({
      title,
      duration,
      user: userId,
    });

    await newSession.save();

    res.status(201).json(newSession);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getUserSessions = async (req, res) => {
  try {
    const sessions = await StudySession.find({ user: req.user.id });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createStudySession, getUserSessions };
