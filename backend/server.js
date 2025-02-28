// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const authRoutes = require('./routes/authRoutes');

// Initialize environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middlewares
app.use(express.json()); // Allows the server to parse incoming JSON
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Routes
app.use('/api/tasks', taskRoutes); // Route to handle task-related requests
app.use('/api/subjects', subjectRoutes); // Route to handle subject-related requests
app.use('/api/auth', authRoutes); // Route to handle authentication requests

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1); // Exit process with failure
  }
};

// Connect to the database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
