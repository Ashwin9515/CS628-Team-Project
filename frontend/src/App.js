import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>Study Planner</h1>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<div>Welcome to study planner</div>} />
            <Route path="/dashboard" element={<div>This is your dashboard</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
