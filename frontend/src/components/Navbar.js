import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token"); // Check if user is logged in by checking for a token in localStorage

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage to log out
    window.location.href = "/"; // Redirect to the homepage
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        {isLoggedIn ? (
          <li style={styles.navItem}>
            <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
          </li>
        ) : null}
        {!isLoggedIn ? (
          <li style={styles.navItem}>
            <Link to="/login" style={styles.navLink}>Login</Link>
          </li>
        ) : (
          <li style={styles.navItem}>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#4CAF50",
    padding: "1rem",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "18px",
  },
  logoutButton: {
    backgroundColor: "#FF6347",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Navbar;
