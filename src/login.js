import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    // Very basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError('Please enter a password.');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password before proceeding
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
      // You can add your login logic here (not implemented in this example)
      console.log('Login clicked');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header" >Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="email-label" >Email:</label>
          <input className="email-input"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label className="password-label">Password:</label>
          <input className="password-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button className="login-button"  type="submit">Login</button>
        <p className="register link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
