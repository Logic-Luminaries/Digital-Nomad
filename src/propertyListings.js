import React, { useState } from 'react';
import './propertyListings.css'; // You can create a CSS file for styling
import PropertyPopup from './propertyPopup';

function PropertyListings (){
  const [selectedProperty, setSelectedProperty] = useState(null);
 // Dummy data for property listings
 const propertyListings = [
    {
      title: 'Cozy Apartment in the City',
      location: 'New York, NY',
      price: '$100/night',
      imageUrl: '/Images/property1.webp',
    },
    {
      title: 'Beachfront Villa with Stunning Views',
      location: 'Miami Beach, FL',
      price: '$250/night',
      imageUrl: '/Images/property2.webp',
    },
    {
      title: 'Rustic Cabin in the Woods',
      location: 'Big Sur, CA',
      price: '$80/night',
      imageUrl: '/Images/property3.webp',
    },
    {
      title: 'Luxury Penthouse with Skyline Views',
      location: 'Los Angeles, CA',
      price: '$350/night',
      imageUrl: '/Images/property4.webp',
    },
    {
      title: 'Mountain Retreat with Hot Tub',
      location: 'Asheville, NC',
      price: '$150/night',
      imageUrl: '/Images/property5.webp',
    },
  ];

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const closePopup = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="property-listing">
      {propertyListings.map((property, index) => (
        <div
          key={index}
          className="property-card"
          onClick={() => handlePropertyClick(property)} // Open the popup on click
        >
          <img src={property.imageUrl} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>{property.price}</p>
        </div>
      ))}

      {/* Conditionally render the popup */}
      {selectedProperty && (
        <PropertyPopup property={selectedProperty} onClose={closePopup} />
      )}
    </div>
  );
}

export default PropertyListings;