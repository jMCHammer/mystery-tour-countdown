import React, { useState } from "react";
import Proximity from "./Proximity";

var prompt =
  "This institution is cleverly disguised. But their students are trained in more than one art. Not the FBI, but close...";

var answers = ["cia", "culinary institute of america", "culinary institute"];

function CIA(props) {
  const gps = [41.74694620150319, -73.93207740778101];
  const [location, setLocation] = useState("");
  const [solved, setSolved] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("submitted");
    if (answers.includes(location.toLowerCase())) {
      console.log("true!");
      setSolved(true);
    }
  };
  const handleNext = evt => {
    evt.preventDefault();
    console.log("next");
    props.handleDone();
  };
  return (
    <div>
      <p>{prompt}</p>
      <form hidden={solved} onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form hidden={!solved} onSubmit={handleNext}>
        Meet there for some food! Then continue on...
        <input value="Next" type="submit" />
        <p>
          <Proximity location={gps} />
        </p>
      </form>
    </div>
  );
}
export default CIA;
