// booking.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './booking.css'

function BookingDatePicker({ onDateSelect }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateSelect = () => {
    // Handle the selected start and end dates as needed
    console.log('Start Date from booking.js:', startDate);
    console.log('End Date from booking.js:', endDate);

    // Pass the selected dates back to the parent component
    onDateSelect(startDate, endDate);
  };

  return (
    <div className="datepicker-popup">
      <div className="datepicker-popup-content">
        <div className="start">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
          />
        </div>
        <div className="end">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select end date"
          />
        </div>
      </div>
      <button onClick={handleDateSelect} class="closeButton">Close</button>
    </div>
  );
}

export default BookingDatePicker;
