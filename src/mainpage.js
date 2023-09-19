import React, { useState } from 'react';
import Header from './header';
import Header2 from './header2';
import PropertyListings from './propertyListings';
import Map from './map'; // Import the Map component
import './mainpage.css'; // To style between components

function MainPage() {
  const [showMap, setShowMap] = useState(false);
  const [filters, setFilters] = useState(null);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const applyFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className="main-page">
      <Header />
      <Header2
        onMapButtonClick={toggleMap}
        showMap={showMap}
        onApplyFilter={applyFilter}
        onClearFilters={clearFilters} // Pass the clearFilters function
      />
      {showMap ? <Map /> : <PropertyListings filters={filters} />}
    </div>
  );
}

export default MainPage;
