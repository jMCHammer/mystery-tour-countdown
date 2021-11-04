import React, { useContext, useState } from "react";

import useInterval from "./interval.js";
import Letter from "./puzzles/Letter.jsx";
import Library from "./puzzles/Library.jsx";
import CIA from "./puzzles/CIA.jsx";
import Amtrak from "./puzzles/Amtrak.jsx";
import Park from "./puzzles/Park.jsx";
import Bridge from "./puzzles/Bridge.jsx";
import End from "./puzzles/End.jsx";
/*
Letter -> Library -> CIA -> Amtrak -> Park -> Bridge
Letter -> Amtrak -> Park -> Bridge -> Library -> CIA
*/
var game = [Letter, Library, CIA, Amtrak, Park, Bridge, End];

function Puzzle(props) {
  const [time, setTime] = useState(new Date().getTime());
  const [delay, setDelay] = useState(1000);

  const [componentKey, setComponentKey] = useState(0);

  function handleDone() {
    setComponentKey(componentKey + 1);
  }

  const GameComponent = game[componentKey];

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
    <div>
      <GameComponent handleDone={handleDone} />
    </div>
  );
}

export default Puzzle;
