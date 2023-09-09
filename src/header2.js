import React from 'react';
import { Link } from 'react-router-dom';
import './header2.css'; // You can create a CSS file for styling
import { LuSettings2 } from 'react-icons/lu';
import { BiMap } from 'react-icons/bi';

function Header2({ onMapButtonClick, showMap }) {
  const handleFilter = () => {
    // Implement your filter logic here
    alert('Filter button clicked!'); // You can replace this with your actual filter code
  };

  const handleMapToggle = () => {
    onMapButtonClick(); // Call the toggleMap function from MainPage
  };

  return (
    <div className="Header2">
      <div class="button-container">
        <button onClick={handleFilter} className="header2-button">
          <LuSettings2 /> Filter
        </button>
        <button onClick={handleMapToggle} className="header2-button">
          {showMap ? 'Property' : <BiMap />} {showMap ? '' : 'Map'}
        </button>
      </div>
    </div>
  );
}

export default Header2;
