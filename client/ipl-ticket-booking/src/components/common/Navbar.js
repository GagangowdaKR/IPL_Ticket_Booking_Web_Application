import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section: IPL Logo */}
      <div className="navbar-logo">
        <img
          src="/path-to-your-logo/ipl-logo.png" // Replace with the actual path to your IPL logo
          alt="IPL Logo"
        />
      </div>

      {/* Middle Section: Search Bar */}
      <div className="navbar-middle">
        <div className="navbar-search">
          <input type="text" placeholder="Search matches, teams..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Right Section: Location & Login */}
      <div className="navbar-right">
        <div className="navbar-location">
          <i className="fas fa-map-marker-alt"></i>
          <select>
            <option value="">Location</option>
            <option value="mumbai">Mumbai</option>
            <option value="chennai">Chennai</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>
        <div className="navbar-login">
          <button onClick={() => window.location.href = '/Login'}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
