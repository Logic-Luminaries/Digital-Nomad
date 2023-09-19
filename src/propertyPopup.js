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
        <div className="image-holder">
          <img src={property.imageUrl} alt={property.title} />
        </div>
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        {/* Show description before amenities */}
        <div className="description">
          <h4>Description:</h4>
          <p>{property.description}</p>
        </div>
        {/* Add Nearby section */}
        <div className="nearby">
          <h4>Nearby:</h4>
          <ul>
            {property.nearby.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Add amenities section */}
        <div className="amenities">
          <h4>Amenities:</h4>
          <ul>
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyPopup;


