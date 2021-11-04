import React, { useContext, useState } from "react";
var title = `A Haiku for you...`;

var prompt = `A park close to you...
A short quote, written on stone...
A Journalist named...`;

var answers = ["charles kuralt"];

function Park(props) {
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
        Nice job! Your success will take you to new heights
        <input value="Next" type="submit" />
      </form>
    </div>
  );
}
export default Park;
