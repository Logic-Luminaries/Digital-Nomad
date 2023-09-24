import React from 'react';
import './propertyPopup.css'; // Import the CSS file for styling

function PropertyPopup({ property, onClose }) {
  // This component receives the selected property as a prop and a function to close the popup

  return (
    
    <div className="popup-page">
      <div className="property-popup">
        <div className="propertyclose-holder">
          <button className="propertyclose-button" onClick={onClose}>
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
    </div>
  );
}

export default PropertyPopup;
