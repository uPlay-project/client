import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";
import { Input } from "antd";
import axios from "axios";
import "./Signup.css";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5005";

function Signup(props) {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const initForm = {
    email: "",
    password: "",
    username:"",
    country: "",
    state: "",
  };
  const [form, setForm] = useState(initForm);

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleForm = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [inputName]: inputValue }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const user = form;

    axios
      .post(`${API_URL}/auth/signup`, user)
      .then((response) => {
        console.log("response", response);
        toast.success("Successully Signup", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: true,
        });
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`signup ${theme}`}>
      <form onSubmit={handleSignupSubmit}>
        <h1>Sign Up</h1>
        <div className="inputstyle">
          <label>Username</label>
          <Input
            className="input-formstyle"
            type="text"
            name="username"
            value={form.username}
            onChange={handleForm}
            required
          />
        </div>

       

        <div className="inputstyle">
          <label>Email</label>
          <Input
            className="input-formstyle"
            type="text"
            name="email"
            value={form.email}
            onChange={handleForm}
            required
          />
        </div>

        <div className="inputstyle">
          <label>Password</label>
          <Input
            className="input-formstyle"
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
            required
          />
        </div>

        <div className="inputstyle">
          <label>Country</label>
          <Input
            className="input-formstyle"
            type="text"
            name="country"
            value={form.country}
            onChange={handleForm}
            required
          />
        </div>

        <div className="inputstyle">
          <label>State</label>
          <Input
            className="input-formstyle"
            type="text"
            name="state"
            value={form.state}
            onChange={handleForm}
            required
          />
        </div>

        <div>
          <button className="btn-form" type="submit">
            Sign Up!
          </button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login here!</Link>
    </div>
  );
}

export default Signup;
