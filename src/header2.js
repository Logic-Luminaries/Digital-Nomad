import React, { useState } from 'react';
import './header2.css'; // You can create a CSS file for styling

function Header2() {
  
  const handleFilter = () => {
    // Implement your login logic here
    alert('Filter button clicked!'); // You can replace this with your actual login code
  };

  const handleMap = () => {

  };

 

  return (
    <div className="Header2">
      <div className="filter">
        <button onClick= {handleFilter}className="filter__Button">Filter</button>
      </div>
      <div className="map">
        <button onClick = {handleMap} className="map__Button">Map</button>
      </div>
    </div>
  );
}

export default Header2;