import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';  
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://mern-auth-crud-3.onrender.com/login", { email, password })
      .then((response) => {
        console.log(response);
        navigate("/products");
        alert("User login successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error registering user");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Enter your email"
            />
          </label>
          <label className="form-label">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Enter your password"
            />
          </label>
          <input type="submit" value="Submit" className="login-btn" />
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register" className="link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
