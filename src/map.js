import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -26.111,
  lng: 28.049,
};

//Placeholder for the pin's information
const pin_info = [
  { position: { lat: -26.111, lng: 28.049 }, title: "Building 1" },
  { position: { lat: -15, lng: 30 }, title: "Building 2" },
  { position: { lat: -30, lng: 10 }, title: "Building 3" },
];

//Create markers and set them onto the map
function CreateMarker(positions, map) {
  positions.forEach((item) => {
    var marker = new window.google.maps.Marker({
      position: item.position,
      title: item.title,
    });
    bindInfoWindow(marker, map);
    marker.setMap(map);
  });
}

function bindInfoWindow(marker, map) {
  var infowindow = new window.google.maps.InfoWindow({
    content: "test",
  });
  window.google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
}

// To add the marker to the map, call setMap();

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBTNr9tdH-cWOydONwKcWUlxkLdty4A3IU",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);

    //Variable for the popup info window

    //Run the function to set the pins
    CreateMarker(pin_info, map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
