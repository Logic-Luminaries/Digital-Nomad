import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



  return (
    <div className="header">
      <div className="header__left">
        <img src="TopLeftHeaderLogo.jpeg" alt="Logo" className="header__logo" />
      </div>
      <div className="header__middle">
        <Link to="/booking">
        <button className="header__bookButton">Book</button>
        </Link>
        

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
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
            <Link to="/">
              <button>About</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;