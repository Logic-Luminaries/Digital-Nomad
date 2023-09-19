import React, { useState } from 'react';
import './propertyListings.css'; // You can create a CSS file for styling
import PropertyPopup from './propertyPopup';

function PropertyListings ({ filters }){
  const [selectedProperty, setSelectedProperty] = useState(null);
 // Dummy data for property listings
 const propertyListings = [
    {
      id: 1,
      position: { lat: -26.198857405708537, lng: 28.007386742232416 },
      list_date: "2023-01-01",
      title: 'Cozy Apartment in the City',
      location: 'Johannesburg, SA',
      type: "Apartment",
      beds: 2,
      price: 'R100/night',
      imageUrl: '/Images/property1.webp',
    },
    {
      id: 2,
      position: { lat: -28.716323761935303, lng: 24.742429469034306 },
      list_date: "2023-08-13",
      title: 'Rustic Cabin in the Woods',
      location: 'Kimberly, SA',
      type: "Cabin",
      beds: 4,
      price: 'R250/night',
      imageUrl: '/Images/property2.webp',
    },
    {
      id: 3,
      position: { lat: -33.9857337946768, lng: 18.556856052865633},
      list_date: "2023-01-23",
      title: 'Beachfront Villa with Stunning Views',
      location: 'Cape Town, SA',
      type: "Villa",
      beds: 8,
      price: 'R80/night',
      imageUrl: '/Images/property3.webp',
    },
    {
      id: 4,
      position: { lat: -29.84730752676241, lng: 31.017384738380567 },
      list_date: "2023-12-24",
      title: 'Luxury Penthouse with Beach Views',
      location: 'Durban, SA',
      type: "Apartment",
      beds: 4,
      price: 'R350/night',
      imageUrl: '/Images/property4.webp',
    },
    {
      id: 5,
      position: { lat: -27.83261042097482, lng: 29.68088678570063 },
      list_date: "2023-06-06",
      title: 'Mountain Retreat with Hot Tub',
      location: 'Drakensburg, SA',
      type: "House",
      beds: 10,
      price: 'R150/night',
      imageUrl: '/Images/property5.webp',
    },
  ];

    // Filter properties based on the selected criteria
  const filteredProperties = propertyListings.filter((property) => {
    if (!filters || Object.keys(filters).length === 0) return true;

    const { minPrice, maxPrice, minBeds, maxBeds } = filters;
    const propertyPrice = parseFloat(property.price.split('R')[1]);
    return (
      (!minPrice || propertyPrice >= minPrice) &&
      (!maxPrice || propertyPrice <= maxPrice) &&
      (!minBeds || property.beds >= minBeds) &&
      (!maxBeds || property.beds <= maxBeds)
    );
  });

  
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const closePopup = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="property-listing">
      {filteredProperties.map((property, index) => (
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