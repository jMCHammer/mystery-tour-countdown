import React, { useContext, useState } from "react";

var title = "One last stop for you, We'll ascend not one floor, but a few";

var prompt =
  "There is no grass, This destination is your last, Ride up the elevator made of ...";
var answers = ["glass"];

function Bridge(props) {
  const [guess, setGuess] = useState("");
  const [solved, setSolved] = useState(false);
  const handleNext = evt => {
    evt.preventDefault();
    props.handleDone();
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("submitted");
    if (answers.includes(guess.toLowerCase())) {
      console.log("true!");
      setSolved(true);
    }
  };
  return (
    <div>
      <p>{title}</p>

      <p>{prompt}</p>
      <form hidden={solved} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={guess}
            onChange={e => setGuess(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form hidden={!solved} onSubmit={handleNext}>
        Nice job! This is your last stop, enjoy the views!
        <input value="Next" type="submit" />
      </form>
    </div>
  );
}
export default Bridge;
