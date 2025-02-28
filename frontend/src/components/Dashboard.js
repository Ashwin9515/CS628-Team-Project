// frontend/src/pages/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Your Tasks</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
