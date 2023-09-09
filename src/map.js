import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Header2 from "./header2";
import Header from "./header";
import "./map.css";

const center = {
  lat: -26.111,
  lng: 28.049,
};

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
const pin_info = [
  {
    id: 1,
    position: { lat: -26.111, lng: 28.049 },
    list_date: "2023-01-01",
    type: "House",
    beds: 10,
    title: "Building 1",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 2,
    position: { lat: -15, lng: 30 },
    list_date: "2023-08-13",
    type: "Cottage",
    beds: 3,
    title: "Building 2",
    price: 230000,
    image:
      "https://people.com/thmb/Rq4-T9Jiu-hohH1zxcPFgdeszBQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(780x211:782x213)/barbie-Ken-malibu-Dream-House-Airbnb-tout-e18b10475a30478992ea81a023e8c1be.jpg",
  },
  {
    id: 3,
    position: { lat: -30, lng: 10 },
    list_date: "2023-03-28",
    type: "House",
    beds: 8,
    title: "Building 3",
    price: 560000,
    image:
      "https://amazingarchitecture.com/storage/2184/brutalist_house_lyx_arkitekter_iceland.jpg",
  },
];

//Create markers and set them onto the map
function CreateMarker(positions, map) {
  positions.forEach((item) => {
    var marker = new window.google.maps.Marker({
      position: item.position,
      title: item.title,
    });
    bindInfoWindow(
      marker,
      map,
      item.title,
      item.price,
      item.image,
      item.beds,
      item.type,
      item.list_date,
      item.id
    );
    marker.setMap(map);
  });
}

function bindInfoWindow(
  marker,
  map,
  title,
  price,
  image,
  beds,
  type,
  list_date,
  id
) {
  var infowindow = new window.google.maps.InfoWindow({
    content:
      "<a href='/properties?id=" +
      id +
      "' <div class='map_info_wrapper'><div class='img_wrapper'><img class=image src=" +
      image +
      "></div>" +
      "<div class='property_content_wrap'>" +
      "<div class='property_title'>" +
      "<span>" +
      title +
      "</span>" +
      "</div>" +
      "<div class='property_price'>" +
      "<span>R" +
      price +
      "</span>" +
      "</div>" +
      "<div class='property_bed_type'>" +
      "<span>" +
      beds +
      "</span>" +
      "<div>" +
      type +
      "</div>" +
      "</div>" +
      "<div class='property_listed_date'>" +
      "<span>Listed on " +
      list_date +
      "</span>" +
      "</div>" +
      "</div></a></div>",
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
    map.setOptions({ styles: styles["hide"] });
    setMap(map);

    //Variable for the popup info window

    //Run the function to set the pins
    CreateMarker(pin_info, map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapContainerClassName="map-canvas"
      >
        <></>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
