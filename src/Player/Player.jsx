import React, { useState, useContext } from "react";

import Countdown from "../Countdown/Countdown";
import Instruction from "../Instruction/Instruction";
import UserContext from "../UserContext";

const game = {
  countdown: {
    comp: Countdown,
    endDate: new Date(new Date("June 13 2020"))
  },
  Hello: {
    comp: Instruction,
    endDate: new Date(new Date().getTime() + 15000)
  }
};

//const start = new Date("July 4 2020 00:00:00 GMT-0400 (Eastern Daylight Time)");

function Player() {
  // todo set initial component based on current time
  const [componentKey, setComponentKey] = useState("countdown");
  const user = useContext(UserContext);

  const GameComponent = game[componentKey];

  function goToNextPage() {
    if (componentKey === "countdown") {
      setComponentKey("Hello");
    }
  }
  if (user) {
    return (
      <GameComponent.comp
        endDate={GameComponent.endDate}
        goToNext={goToNextPage}
      />
    );
  }
  return null;
}

export default Player;
