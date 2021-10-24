import React, { useState } from "react";

var nodeEnv = process.env.NODE_ENV;

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
  //todo: get a location from the server
  // south side of Roberts Pool
  const [location, setLocation] = useState([39.921916, -75.075628]);

  const [position, setPosition] = useState([39.921916, -75.075628]);

  function showPosition(p) {
    setPosition([p.coords.latitude, p.coords.longitude]);
  }

  calculatePosition(showPosition);
  var distanceInMeters = distanceBetweenPositions(position, location);
  return (
    <div>
      You are {distanceInMeters} meters from your destination. Position:
      {position}
    </div>
  );
}

export default Proximity;
