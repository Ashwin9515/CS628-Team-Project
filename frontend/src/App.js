import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from "./components/dashboard";
import CreateTask from "./components/create_task";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/assignments" activeClassName="active">Tasks</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<div>Welcome to study planner</div>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assignments" element={<CreateTask />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
