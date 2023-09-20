import React from 'react';
import './propertyPopup.css'; // Import the CSS file for styling

function PropertyPopup({ property, onClose }) {
  // This component receives the selected property as a prop and a function to close the popup

  return (
    <div className="property-popup">
      <div className="popup">
        <div className="close-holder">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="popup-content">
          <div className="image-holder">
            <img src={property.imageUrl} alt={property.title} />
          </div>
          <h3 className="property-title">{property.title}</h3>
          <p className="property-location">{property.location}</p>
          <p className="property-price">{property.price}</p>
          {/* Add more property details here */}
        </div>
      </div>
    </div>
  );
}

export default PropertyPopup;
