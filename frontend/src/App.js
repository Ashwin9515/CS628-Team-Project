import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'; // A simple home page that users can see after logging in or signing up
import Dashboard from './components/Dashboard'; // Dashboard for logged-in users
import Navbar from './components/Navbar';

const App = () => {
  // Check if user is logged in (check for token in localStorage)
  const isLoggedIn = localStorage.getItem('token') ? true : false;

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes - Only accessible if logged in */}
          {isLoggedIn && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
            </>
          )}
          
          {/* Fallback Route for 404 */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
