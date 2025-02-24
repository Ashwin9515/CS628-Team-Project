const express = require("express");
const { createStudySession, getUserSessions } = require("../controllers/studyController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createStudySession);
router.get("/:userId", protect, getUserSessions);

module.exports = router;
