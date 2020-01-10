import React, { useState } from "react";

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function distanceBetweenPositions(position1, position2) {
  var lat1 = position1[0];
  var lon1 = position1[1];
  var lat2 = position2[0];
  var lon2 = position2[1];

  var earthRadiusM = 6371000;

  var dLat = degreesToRadians(lat2 - lat1);
  var dLon = degreesToRadians(lon2 - lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusM * c;
}

async function fetchData(setter) {
  const res = await fetch(
    'https://mystery-backend.herokuapp.com/locations?name="Work"'
  );
  res
    .json()
    .then(res => setter(res[0]))
    .catch(() => console.log("Couldn't find user"));
}

function Proximity() {
  //todo: get a location from the server
  // this is roughly Dilworth Park
  const [location, setLocation] = useState([39.95306, -75.164527]);
  fetchData(setLocation);
  const [position, setPosition] = useState([null, null]);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    setPosition([position.coords.latitude, position.coords.longitude]);
  }

  var distanceInMeters = distanceBetweenPositions(position, location);
  return <div>You are {distanceInMeters} meters from your destination.</div>;
}

export default Proximity;
