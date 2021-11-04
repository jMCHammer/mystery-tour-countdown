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
  countdown: {
    comp: Countdown,
    endDate: new Date(
      // new Date("November 5 2021 00:00:00 GMT-0400 (Eastern Daylight Time)")
      new Date("November 4 2021 21:00:00 GMT-0400 (Eastern Daylight Time)")
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
  const [componentKey, setComponentKey] = useState("countdown");
  const user = useContext(UserContext);

  const GameComponent = game[componentKey];
  const endDate = 10;
  function goToNextPage() {
    if (componentKey === "countdown") {
      setComponentKey("Hello");
    } else if (componentKey === "Hello") {
      setComponentKey("Wait");
    } else if (componentKey === "Wait") {
      setComponentKey("Puzzle");
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
