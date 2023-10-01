import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './booking.css';


function BookingDatePicker({ onDateSelect }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const handleStartDateChange = (date) => {
    // Log the selected start date immediately
    console.log('Start Date from booking.js:', date);
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    // Log the selected end date immediately
    console.log('End Date from booking.js:', date);
    setEndDate(date);
  };

  const handleDateSelect = () => {
    // Pass the selected dates back to the parent component
    onDateSelect(startDate, endDate);
    
  };

  return (
    <div className="datepicker-popup">
      <div className="datepicker-popup-content">
        <div className="start">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
          />
        </div>
        <div className="end">
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select end date"
          />
        </div>
      </div>
      <button onClick={handleDateSelect} className="closeButton">
        Apply
      </button>
      
    </div>
  );
}

export default BookingDatePicker;
