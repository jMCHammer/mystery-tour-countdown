import React, { useState } from "react";

import useInterval from "./interval.js";

import "./Countdown.scss";

function calculateCountdown(endDate) {
  let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

  // clear countdown when date is reached
  if (diff < 0) return false;

  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0
  };

  // calculate time difference between now and expected date
  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60);
    diff -= timeLeft.min * 60;
  }
  timeLeft.sec = diff;

  return timeLeft;
}

function Countdown(props) {
  const [delay, setDelay] = useState(1000);
  const [countDown, setCountDown] = useState(calculateCountdown(props.endDate));

  useInterval(() => {
    var date = calculateCountdown(props.endDate);
    if (date) {
      setCountDown(date);
    } else {
      setDelay(null);
      props.goToNext();
    }
  }, delay);
  function wearedonehere(c) {
    return c.days === 0 && c.hours === 0 && c.min === 0 && c.sec === 0;
  }
  const className = !wearedonehere(countDown) ? "fadeMeIn" : "fadeMeOut";
  return (
    <div className={className}>
      <CountdownElement
        days={countDown.days}
        display={countDown.days <= 1 ? "Day" : "Days"}
      />
      <CountdownElement
        days={countDown.hours}
        display={countDown.hours <= 1 ? "Hour" : "Hours"}
      />
      <CountdownElement
        days={countDown.min}
        display={countDown.min <= 1 ? "Minute" : "Minutes"}
      />
      <CountdownElement
        days={countDown.sec}
        display={countDown.sec <= 1 ? "Second" : "Seconds"}
      />
    </div>
  );
}

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

export default Countdown;
