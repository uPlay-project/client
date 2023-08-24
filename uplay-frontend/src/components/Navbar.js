import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/theme.context";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <div className='nav-container'>
        <button onClick={toggleTheme}>{theme === "light" ? "🌞": "🌙"}</button>
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
