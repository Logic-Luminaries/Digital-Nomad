import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword || confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate email, password, and confirmPassword before proceeding
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (!emailError && !passwordError && !confirmPasswordError) {
      // You can add your registration logic here
      console.log('Registration clicked');
    }
  };

  return (
    <div className="register-container">
      <h2>Register Page</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && (
            <div className="error">{confirmPasswordError}</div>
          )}
        </div>
        <button type="submit">Register</button>
        <p className="login link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}


export default Register;
