import React from 'react';
import './propertyPopup.css'; // Import the CSS file for styling


function PropertyPopup({ property, onClose }) {
    // This component receives the selected property as a prop and a function to close the popup
  
    return (
      <div className="property-popup">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <img src={property.imageUrl} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>{property.price}</p>
          {/* Add more property details here */}
        </div>
      </div>
    );
  }
  
  export default PropertyPopup;