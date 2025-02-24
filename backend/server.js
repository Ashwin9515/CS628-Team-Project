// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // To load environment variables
const cors = require('cors'); // To handle Cross-Origin requests

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // For parsing JSON data

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure if DB connection fails
  }
};

// Call the MongoDB connection function
connectDB();

// Basic route for testing
app.get('/', (req, res) => {
  res.send("Welcome to the Study Planner App Backend!");
});

// Define your other routes here, e.g., CRUD operations for Study Plans, Users, etc.

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
