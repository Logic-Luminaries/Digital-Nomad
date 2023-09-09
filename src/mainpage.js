import React, { useState } from 'react';
import Login from './login';
import Header from './header';
import Header2 from './header2';
import PropertyListings from './propertyListings';
import Map from './map'; // Import the Map component
import './mainpage.css'; // To style between components

function MainPage() {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="main-page">
      <Header />
      <Header2 onMapButtonClick={toggleMap} showMap={showMap} />
      {showMap ? <Map /> : <PropertyListings />}
    </div>
  );
}

export default MainPage;
