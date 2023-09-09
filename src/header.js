import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsPersonCircle} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



  return (
    <div className="header">
      <div className="header__left">
        <img src="logo.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__middle">
        
      <button className="header__searchButton">
      <div className="header__searchText">Search</div>
      <div className="header__searchHolder">      
      <div className="header__searchIcon">
        <AiOutlineSearch />
      </div>
      </div>
      </button>
      </div>
      <div className="header__right">
      <button 
      className={`header__profileButton ${isPopupOpen ? 'active' : ''}`}
      onClick={togglePopup}> <RxHamburgerMenu/> <BsPersonCircle className='.BsPersonCircle'/>
      </button>
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