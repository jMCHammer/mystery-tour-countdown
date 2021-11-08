import React, { useContext, useState } from "react";

import UserContext from "./UserContext";
import useInterval from "./interval.js";

function Wait(props) {
  const [time, setTime] = useState(new Date().getTime());
  const [delay, setDelay] = useState(1000);
  const user = useContext(UserContext);

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
  return <div className={className}>Please Await Further Instructions</div>;
}

export default Wait;
