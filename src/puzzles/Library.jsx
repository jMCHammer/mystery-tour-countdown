import React, { useState } from "react";
import Proximity from "./Proximity";

var prompt =
  "Some say you'll find Wisdom from spending time in the Library. Here you may find some outside of it as well...";
var puzzle = "What's the title?";
var answers = ["the way to wisdom"];
function Library(props) {
  const [solved, setSolved] = useState(false);
  const [guess, setGuess] = useState("");

  const handleNext = evt => {
    evt.preventDefault();
    props.handleDone();
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (answers.includes(guess.toLowerCase())) {
      setSolved(true);
    }
  };

  // Wisdom statue near Marist Library
  const location = [41.721883, -73.933583];

  // Roberts Pool
  // const location = [39.921916, -75.075628];

  return (
    <div>
      <p>{prompt}</p>
      <p>{puzzle}</p>
      <form hidden={solved} onSubmit={handleSubmit}>
        <p>
          <Proximity location={location} />
        </p>
        <label>
          Title:
          <input
            type="text"
            value={guess}
            onChange={e => setGuess(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form hidden={!solved} onSubmit={handleNext}>
        That's correct!
        <input value="Next" type="submit" />
      </form>
    </div>
  );
}

export default Library;
