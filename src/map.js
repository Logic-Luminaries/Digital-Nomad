import React, {useState}  from "react";
import { GoogleMap, useJsApiLoader ,Marker, InfoWindow} from "@react-google-maps/api";
import "./map.css";

// Set the map's center position
const center = {
  lat:  -28.958938769344897,
  lng: 25.403825803995364,
};

// Choose what to display on the map
const styles = {
  default: [],
  hide: [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
  ],
};

//Placeholder for the pin's information
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



function Map({filters}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBTNr9tdH-cWOydONwKcWUlxkLdty4A3IU",
  });

  const [selectedProperty, setSelectedProperty] = useState(null);

   // Define a function to adjust the InfoWindow position
   const adjustInfoWindowPosition = (markerPosition) => {
    if (!markerPosition) return null;
    // Calculate the adjusted position, for example, move it 50 pixels up
    return { lat: markerPosition.lat + 0.005, lng: markerPosition.lng };
  };
  
const filteredProperties = propertyListings.filter((property) => {
  if (!filters || Object.keys(filters).length === 0) return true;

  const { minPrice, maxPrice, minBeds, minBathrooms , propertyTypes , amenities   } = filters;
  const propertyPrice = parseFloat(property.price.split('R')[1]);
  return (
    (!minPrice || propertyPrice >= minPrice) &&
    (!maxPrice || propertyPrice <= maxPrice) &&
    (!minBeds || property.beds >= minBeds) &&
    (!minBathrooms || property.bathrooms >= minBathrooms) &&
    (!propertyTypes || propertyTypes.length === 0 ||propertyTypes.includes(property.type) ) &&
    (!amenities || amenities.length === 0 || amenities.every((amenity) => property.amenities.includes(amenity)))
    );
});


 
return isLoaded ? (
  <>
    <GoogleMap
      center={center}
      styles={styles["hide"]}
      zoom={6}
      mapContainerClassName="map-canvas"
    >
      {filteredProperties.map((property) => (
        <Marker
          key={property.id}
          position={property.position}
          onClick={() => {
            setSelectedProperty(property);
          }}
        />
      ))}

      {selectedProperty && (
        <InfoWindow
        position={adjustInfoWindowPosition(selectedProperty.position)}
                  onCloseClick={() => {
            setSelectedProperty(null);
          }}
        >
          <div class="info-window">
          <img class="marker-image" src={selectedProperty.imageUrl} alt={selectedProperty.title} />
          <h2 class="marker-title">{selectedProperty.title}</h2>
          <p class="marker-location"><strong>Location:</strong> {selectedProperty.location}</p>
          <p class="marker-price"><strong>Price:</strong> {selectedProperty.price}</p>
          <p class="marker-type"><strong>Type:</strong> {selectedProperty.type}</p>
          <p class="marker-beds"><strong>Beds:</strong> {selectedProperty.beds}</p>
        </div>
        </InfoWindow>
      )}
    </GoogleMap>
  </>
) : (
  <></>
);
}

export default Map;