import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import BookingDatePicker from './booking'; // Import your Calendar component here
import DatePicker from 'react-datepicker'; // Import DatePicker here
import PropertyListings from './propertyListings'

function Header({onDateSelect}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State to control the calendar visibility

  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const [startDate, setStartDate] = useState(null); //initialise start and end dates
  const [endDate, setEndDate] = useState(null);
  const handleDateSelect = (startDate, endDate) => { //a function to collect the start and end date

    
    setStartDate(startDate);
    setEndDate(endDate);

    setIsCalendarOpen(false);// set calendar to closed

    onDateSelect(startDate,endDate); //to pass dates selected from the calendar
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="logo.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__middle">
        {/* Add onClick to the search button to toggle the calendar */}
        <button className="header__searchButton" onClick={toggleCalendar}>
          <div className="header__searchText">Search</div>
          <div className="header__searchHolder">
            <div className="header__searchIcon">
              <AiOutlineSearch />
            </div>
          </div>
        </button>

        {/* Conditionally render the Calendar component */}
        {isCalendarOpen && (
          <div className="datepicker-popup">
            <div className="datepicker-popup-content">
              <BookingDatePicker onDateSelect={handleDateSelect} /> {/* call bookingdate picker and hanlde the dates*/}
            </div>
          </div>
        )}
      </div>
      <div className="header__right">
        <button
          className={`header__profileButton ${isPopupOpen ? 'active' : ''}`}
          onClick={togglePopup}
        >
          <RxHamburgerMenu /> <BsPersonCircle className=".BsPersonCircle" />
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
