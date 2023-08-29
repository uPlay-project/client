import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ThemeContext } from "../context/theme.context";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5005";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const { isLoading, storeToken, authenticateUser } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const requestbody = { email: email, password: password };
    axios.post(`${API_URL}/auth/login`, requestbody).then((response) => {
      console.log("===show me login details==>", response);
      storeToken(response.data.authToken);
      authenticateUser();
      navigate("/");
      setSuccessMessage(response.data);
      toast.success(" Successully LoggedIn", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
      });
    });
  };

  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <div className={`login ${theme}`}>
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default Login;
