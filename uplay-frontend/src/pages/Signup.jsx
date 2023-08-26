import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
 
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const { theme } = useContext(ThemeContext);
 
  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setFirstname(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleState = (e) => setState(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault()

    const user = {firstName, email,password, lastName, country, state};
    
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
        <label>First Name:</label>
        <input 
          type="text"
          value={firstName}
          onChange={handleName}
        />
        <label>Last Name:</label>
        <input 
          type="text"
          value={lastName}
          onChange={handleLastName}
        />

        <label>Email:</label>
        <input 
          type="text"
          value={email}
          onChange={handleEmail}
        />
 
        <label>Password:</label>
        <input 
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <label>Country:</label>
        <input 
          type="text"
          value={country}
          onChange={handleCountry}
        />
        <label>State:</label>
        <input 
          type="text"
          value={state}
          onChange={handleState}
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