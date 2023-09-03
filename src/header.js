import React, { useState } from 'react';
import './header.css'; // You can create a CSS file for styling

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleLogin = () => {
    // Implement your login logic here
    alert('Login button clicked!'); // You can replace this with your actual login code
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    alert('Sign Up button clicked!'); // You can replace this with your actual sign-up code
  };

  const handleAbout = () => {
    // Implement your "About" logic here
    alert('About button clicked!'); // You can replace this with your actual "About" page navigation or content display
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="TopLeftHeaderLogo.jpeg" alt="Logo" className="header__logo" />
      </div>
      <div className="header__middle">
        <button className="header__bookButton">Book</button>
      </div>
      <div className="header__right">
        <img
          src="ProfilePicPlaceHolder.webp" // Specify the path to your profile picture
          alt="Profile"
          className={`header__profileButton ${isPopupOpen ? 'active' : ''}`}
          onClick={togglePopup}
        />
        {isPopupOpen && (
          <div className="header__popup">
            <button onClick={handleLogin}>Login</button> {/* Add onClick for login */}
            <button onClick={handleSignUp}>Sign Up</button> {/* Add onClick for sign up */}
            <button onClick={handleAbout}>About</button> {/* Add onClick for About */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;