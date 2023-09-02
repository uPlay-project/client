import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/theme.context";
import { AuthContext } from "../context/auth.context";
import logoImage from '../assets/logo3.png';
import ProfileImage from '../pages/ProfileImage';







function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn , user } = useContext(AuthContext);
  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '75%',
  }
  

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark bg-black`}>
    
{isLoggedIn && (
  <div>
    <h1>{user.username}</h1>
    <img src={user.image} style={imgStyle} alt="profile_image" />
  </div>
)} 
      <Link to="/">
        <img className='logo-img' alt='logo' src={logoImage} />
      </Link>
      {/* <label className="ml-3">Theme <button className={`theme-btn ${theme}`} onClick={toggleTheme}>{theme === "light" ? "🌞": "🌙"}</button></label> */}
</nav>

    </>
  )
}

export default Navbar;
