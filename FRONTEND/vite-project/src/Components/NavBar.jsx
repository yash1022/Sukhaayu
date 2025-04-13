import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hospitals">Hospitals</Link></li>
        <li><Link to="/blood-availability">Blood Availability</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
