import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const token = localStorage.getItem("token");

      try {
        const { data } = await axios.get("http://localhost:5000/api/study/1", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSessions(data);
      } catch (err) {
        console.error("Error fetching study sessions:", err);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>{session.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
