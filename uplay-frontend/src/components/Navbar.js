import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <i className="fas fa-music"></i> Home
        </Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        {/* If logged in, show the logout button */}
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
