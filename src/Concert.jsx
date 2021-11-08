import React, { useContext, useState } from "react";

import UserContext from "./UserContext";
import useInterval from "./interval.js";
import Countdown from "./Countdown";

function Concert(props) {
  const [time, setTime] = useState(new Date().getTime());
  const [delay, setDelay] = useState(1000);
  const user = useContext(UserContext);
  const endDate = new Date("Nov 06 2021 21:00:00 GMT-0400");

  useInterval(() => {
    var newTime = new Date().getTime();
    if (props.endDate.getTime() > newTime) {
      setTime(newTime);
    } else {
      setDelay(null);
      props.goToNext();
    }
  }, delay);

  if (props.endDate.getTime() < time) {
    return null;
  }
  const className = !props.endDate.getTime() <= time ? "fadeMeIn" : "fadeMeOut";
  return (
    <div className={className}>
      <p> Get ready to Rock!!</p> <p> Be ready to leave by 9:00 PM </p>
      <Countdown endDate={endDate} />
      <a href="https://youtu.be/B9mv3NmKPsg">https://youtu.be/B9mv3NmKPsg</a>
    </div>
  );
}

export default Concert;
