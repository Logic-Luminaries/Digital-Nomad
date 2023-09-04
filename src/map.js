import React from 'react';


function Map() {
 

  const handleLogin = (e) => {
    e.preventDefault();
      console.log('Map clicked');
    }
    return (
      <div className="Map-container">
          <button type="submit">Map</button>
         
      </div>
    );
  };

 

export default Map;