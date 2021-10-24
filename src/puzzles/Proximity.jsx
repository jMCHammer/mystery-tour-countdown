import React, { useState } from "react";

var nodeEnv = process.env.NODE_ENV;

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
function relativeDistance(position1, position2) {
  var meters = distanceBetweenPositions(position1, position2);
  return meters > 100
    ? "far"
    : meters > 30
    ? "getting close"
    : meters > 5
    ? "very close"
    : "there! You're at ";
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
  var url = "https://mystery-backend.herokuapp.com";
  if (nodeEnv == "development") {
    url = "http://localhost:8080";
  }

  const res = await fetch(url + "/locations?name=Work");
  res
    .json()
    .then(res => setter(res[0]))
    .catch(() => console.log("Couldn't find locations"));
}

function calculatePosition(f) {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(f);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function Proximity(props) {
  const [position, setPosition] = useState([39.921916, -75.075628]);

  function showPosition(p) {
    setPosition([p.coords.latitude, p.coords.longitude]);
  }

  calculatePosition(showPosition);
  var distance = relativeDistance(position, props.location);
  return <div>You are {distance} from your destination.</div>;
}

export default Proximity;
