import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
 
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const { theme } = useContext(ThemeContext);
 
  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault()

    const user = {name, email,password};
    
    axios.post(`${API_URL}/auth/signup`, user)
        .then(response => {
            console.log('response', response);
            navigate("/login");
        })
        .catch(err => console.log(err));
  };
 
  
  return (
    <div className={`signup ${theme}`}>
      <h1>Sign Up</h1>
 
      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
 
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <label>Username:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
 
        <button type="submit">Sign Up!</button>
      </form>
 
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Already have account?</p>
      <Link to={"/login"}> Login here!</Link>
    </div>
  )
}
 
export default Signup;