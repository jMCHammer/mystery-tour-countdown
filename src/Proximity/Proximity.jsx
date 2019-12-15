import React, { useState } from "react";

function Proximity() {
  // const [location, setLocation] = useState({ lat: 0, lng: 0 });
  // var map = new google.maps.Map(document.getElementById("map"), {
  //   center: { lat: -34.397, lng: 150.644 },
  //   zoom: 6
  // });
  // var infoWindow = new google.maps.InfoWindow();
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    console.log("supports geolocation");
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log("getting location");
        console.log(position.coords);
        // var pos = {
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude
        // };

        // infoWindow.setPosition(pos);
        // infoWindow.setContent("Location found.");
        // infoWindow.open(map);
        // map.setCenter(pos);
      },
      function() {
        // handleLocationError(true, infoWindow, map.getCenter());
        console.log("Failed 2");
      }
    );
  } else {
    // Browser doesn't support Geolocation
    console.log("Failed");
  }
  return <div />;
}

export default Proximity;
