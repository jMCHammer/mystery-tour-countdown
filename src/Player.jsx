import React, { useState, useContext } from "react";

import Countdown from "./Countdown";
import Instruction from "./Instruction";
import UserContext from "./UserContext";
import Proximity from "./puzzles/Proximity";
import Wait from "./Wait";
import Puzzle from "./Puzzle";
import End from "./End";
import Concert from "./Concert";
const game = {
  Countdown: {
    comp: Countdown,
    endDate: new Date(
      "November 4 2021 21:00:00 GMT-0400 (Eastern Daylight Time)"
    )
  },
  Hello: {
    comp: Instruction,
    endDate: new Date(
      "November 5 2021 00:00:00 GMT-0400 (Eastern Daylight Time)"
    )
  },

  Wait: {
    comp: Wait,
    endDate: new Date("Nov 06 2021 08:00:57 GMT-0400 (Eastern Daylight Time)")
  },
  //// TODO: implement, chain, CIA, test
  Puzzle: {
    comp: Puzzle,
    endDate: new Date("Nov 06 2021 17:00:00 GMT-0400 (Eastern Daylight Time)")
  },

  Concert: {
    comp: Concert,
    endDate: new Date("Nov 06 2021 23:00:00 GMT-0400 (Eastern Daylight Time)")
  },
  End: {
    comp: End,
    endDate: new Date("Nov 10 2021 23:00:00 GMT-0400 (Eastern Daylight Time)")
  }
};

//const start = new Date("July 4 2020 00:00:00 GMT-0400 (Eastern Daylight Time)");

function Player() {
  // todo set initial component based on current time
  const [componentKey, setComponentKey] = useState("Countdown");
  const user = useContext(UserContext);

  const GameComponent = game[componentKey];

  function goToNextPage() {
    if (componentKey === "Countdown") {
      setComponentKey("Hello");
    } else if (componentKey === "Hello") {
      setComponentKey("Wait");
    } else if (componentKey === "Wait") {
      setComponentKey("Puzzle");
    } else if (componentKey === "Puzzle") {
      setComponentKey("Concert");
    } else if (componentKey === "Concert") {
      setComponentKey("End");
    }
  }
  // if (user) {
  return (
    <div>
      <GameComponent.comp
        endDate={GameComponent.endDate}
        goToNext={goToNextPage}
      />
    </div>
  );
  // }
  // return null;
}

export default Player;
