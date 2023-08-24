import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/theme.context";
import logoImage from '../assets/logo3.png';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-black`}>
      <Link to="/" className="navbar-brand">
        <img className='logo-img' alt='logo' src={logoImage} />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/signup" className={`nav-link ${theme}`}>Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className={`nav-link ${theme}`}>Login</Link>
          </li>
        </ul>
      </div>
      <label className="ml-3">Theme <button className={`theme-btn ${theme}`} onClick={toggleTheme}>{theme === "light" ? "🌞": "🌙"}</button></label>
    </nav>
  );
}

export default Navbar;
