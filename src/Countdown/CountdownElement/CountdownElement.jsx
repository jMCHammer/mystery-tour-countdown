import React from "react";

function addLeadingZeros(value) {
  value = String(value);
  while (value.length < 2) {
    value = "0" + value;
  }
  return value;
}

function CountdownElement(props) {
  return (
    <span className="Countdown-col">
      <span className="Countdown-col-element">
        <strong>{addLeadingZeros(props.days)}</strong>
        <span>{props.display}</span>
      </span>
    </span>
  );
}

export default CountdownElement;
