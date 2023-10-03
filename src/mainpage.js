import React, { useState } from 'react';
import Header from './header';
import Header2 from './header2';
import PropertyListings from './propertyListings';
import Map from './map'; // Import the Map component
import './mainpage.css'; // To style between components


function MainPage() {
  const [showMap, setShowMap] = useState(false);
  const [filters, setFilters] = useState(null);

  const [startDate, setStartDate] = useState(null); //initialise start and end dates
  const [endDate, setEndDate] = useState(null);

  const [locationQuery, setLocationQuery] = useState('');

  const handleDateSelect = (start, end) => { //
    setStartDate(start);
    setEndDate(end);
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const applyFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
  };

  const handleLocationSearch = (query) => {
    // Update the location search query state
    setLocationQuery(query);
  };


  return (
    <div className="main-page">
      <Header onDateSelect={handleDateSelect} onLocationSearch={handleLocationSearch} /> {/* capture dates from the calendar in header */}
      <Header2
        onMapButtonClick={toggleMap}
        showMap={showMap}
        onApplyFilter={applyFilter}
        onClearFilters={clearFilters} // Pass the clearFilters function
        
      />
      {showMap ? (
        <Map filters={filters} startDate={startDate} endDate={endDate} locationQuery={locationQuery} />
      ) : (
        <>
          <PropertyListings filters={filters} startDate={startDate} endDate={endDate} locationQuery={locationQuery} /> {/* Pass filters, start and end dates to property listings so that it can filter properties for these */}
          
        </>
      )}
    </div>
  );
  
}

export default MainPage;
