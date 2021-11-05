import React, { useContext, useState } from "react";

function End() {
  const handleNext = evt => {
    evt.preventDefault();
    props.handleDone();
  };
  return (
    <div>
      <p>The Scavenger Hunt is now available</p>
      <form onSubmit={handleNext}>
        <input value="Start" type="submit" />
      </form>
    </div>
  );
}
export default End;
