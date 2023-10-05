import React, { useState } from 'react';
import './propertyListings.css'; // You can create a CSS file for styling
import PropertyPopup from './propertyPopup';


function PropertyListings ({ filters, startDate, endDate, locationQuery  }){
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Dummy data for property listings
  const propertyListings = [
    {
      id: 1,
      position: { lat: -26.198857405708537, lng: 28.007386742232416 },
      list_date: '2023-01-01',
      title: 'Cozy Apartment in the City',
      location: 'Johannesburg, SA',
      type: 'Apartment',
      beds: 2,
      bathrooms: 1,
      price: 'R100/night',
      availablefrom:'2023-10-01',
      availableto:'2023-10-07',
      imageUrl: '/Images/property1.webp',
      amenities: ['Free Wi-Fi', 'Swimming Pool', 'Parking', 'Air Conditioning'],
      description:
        'This cozy apartment in the heart of the city offers a comfortable stay with modern amenities. It features two bedrooms, a fully equipped kitchen, and a beautiful view of the city skyline.',
      nearby: ['Visit Apartheid Museum', 'Explore Maboneng Precinct', 'Shop at Sandton City Mall'],
    },
    {
      id: 2,
      position: { lat: -28.716323761935303, lng: 24.742429469034306 },
      list_date: '2023-08-13',
      title: 'Rustic Cabin in the Woods',
      location: 'Kimberly, SA',
      type: 'Cabin',
      beds: 4,
      bathrooms: 3,
      price: 'R250/night',
      availablefrom:'2023-10-01',
      availableto:'2023-10-07',
      imageUrl: '/Images/property2.webp',
      amenities: ['Free Wi-Fi', 'Fireplace', 'Nature Trails', 'Private Lake'],
      description:
        'Escape to this rustic cabin nestled in the woods. Perfect for nature lovers, it offers a serene environment with hiking trails, a cozy fireplace, and a private lake for fishing.',
      nearby: ['Hike in the nearby forest', 'Fishing in the private lake', 'Stargazing at night'],
    },
    {
      id: 3,
      position: { lat: -33.9857337946768, lng: 18.556856052865633 },
      list_date: '2023-01-23',
      title: 'Beachfront Villa with Stunning Views',
      location: 'Cape Town, SA',
      type: 'Villa',
      beds: 8,
      bathrooms: 10,
      price: 'R80/night',
      availablefrom:'2023-10-27',
      availableto:'2023-10-31',
      imageUrl: '/Images/property3.webp',
      amenities: ['Free Wi-Fi', 'Ocean View', 'Private Beach Access', 'Swimming Pool'],
      description:
        'Indulge in luxury at this beachfront villa with breathtaking ocean views. This villa features eight bedrooms, a private beach, and a stunning infinity pool overlooking the ocean.',
      nearby: ['Relax on the private beach', 'Explore Cape Point', 'Visit Table Mountain'],
    },
    {
      id: 4,
      position: { lat: -29.84730752676241, lng: 31.017384738380567 },
      list_date: '2023-12-24',
      title: 'Luxury Penthouse with Beach Views',
      location: 'Durban, SA',
      type: 'Apartment',
      beds: 4,
      bathrooms: 4,
      price: 'R350/night',
      imageUrl: '/Images/property4.webp',
      amenities: ['Free Wi-Fi', 'Beachfront', 'Private Terrace', 'Gym'],
      description:
        'Experience luxury living in this beachfront penthouse with stunning beach views. The penthouse offers four bedrooms, a private terrace, and access to a fully equipped gym.',
      nearby: ['Enjoy watersports on the beach', 'Dine at local seafood restaurants', 'Visit uShaka Marine World'],
    },
    {
      id: 5,
      position: { lat: -27.83261042097482, lng: 29.68088678570063 },
      list_date: '2023-06-06',
      title: 'Mountain Retreat with Hot Tub',
      location: 'Drakensburg, SA',
      type: 'House',
      beds: 10,
      bathrooms: 15,
      price: 'R150/night',
      imageUrl: '/Images/property5.webp',
      amenities: ['Free Wi-Fi', 'Beachfront', 'Private Terrace', 'Gym'],
      description:
        'Experience luxury living in this beachfront penthouse with stunning beach views. The penthouse offers four bedrooms, a private terrace, and access to a fully equipped gym.',
      nearby: ['Enjoy watersports on the beach', 'Dine at local seafood restaurants', 'Visit uShaka Marine World'],
    },
  ];

  const filteredProperties = propertyListings.filter((property) => {
    const propertyPrice = parseFloat(property.price.split('R')[1]);
    const availableFromDate = new Date(property.availablefrom);
    const availableToDate = new Date(property.availableto);

    const meetsFilterCriteria =
      (!filters || Object.keys(filters).length === 0) ||
      ((!filters.minPrice || propertyPrice >= filters.minPrice) &&
        (!filters.maxPrice || propertyPrice <= filters.maxPrice) &&
        (!filters.minBeds || property.beds >= filters.minBeds) &&
        (!filters.minBathrooms || property.bathrooms >= filters.minBathrooms) &&
        (!filters.propertyTypes || filters.propertyTypes.length === 0 || filters.propertyTypes.includes(property.type)) &&
        (!filters.amenities || filters.amenities.length === 0 || filters.amenities.every((amenity) => property.amenities.includes(amenity))));

    const isWithinDateRange =
      (!startDate || !endDate) ||
      (availableFromDate <= endDate && availableToDate >= startDate);

      const matchesLocationQuery =
      !locationQuery ||
      property.location.toLowerCase().includes(locationQuery.toLowerCase());

    return meetsFilterCriteria && isWithinDateRange && matchesLocationQuery;
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
          onClick={() => handlePropertyClick(property)}
        >
          <img src={property.imageUrl} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>{property.price}</p>
        </div>
      ))}

      {selectedProperty && (
        <PropertyPopup property={selectedProperty} onClose={closePopup} />
      )}
    </div>
  );
}

export default PropertyListings;