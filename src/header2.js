import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./header2.css"; // You can create a CSS file for styling
import { LuSettings2 } from 'react-icons/lu'; 
import {BiMap} from 'react-icons/bi';

function Header2() {
  const handleFilter = () => {
    // Implement your login logic here
    alert("Filter button clicked!"); // You can replace this with your actual login code
  };

  const handleMap = () => {

  };


  return (
    <div className="Header2">
      <div class="button-container">
       <button onClick= {handleFilter}className="header2-button"><LuSettings2 />  Filter</button>
       <Link to="/map">
      <button onClick = {handleMap} className="header2-button"><BiMap />   Map</button>
      </Link>
      </div>
    </div>
  );
}

export default Header2;
