import React, { useState } from "react";
import Proximity from "./Proximity";

var prompt =
  "Some say you'll find Wisdom from spending time in the Library. Here you may find some outside of it as well...";

function Library(props) {
  // Wisdom statue near Marist Library
  //const location = [39.921916, -75.075628];

  // Roberts Pool
  const location = [39.921916, -75.075628];

  return (
    <div>
      <p> {prompt} </p>
      <Proximity location={location} />
    </div>
  );
}

export default Library;
