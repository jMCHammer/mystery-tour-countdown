import React, { useContext, useState } from "react";

function Start(props) {
  const handleNext = evt => {
    evt.preventDefault();
    props.handleDone();
  };
  return (
    <div>
      <p>Incoming Transmission...</p>
      <p>
        Your Spy Qualification exams are now available. Don't start without your
        group
      </p>
      <form onSubmit={handleNext}>
        <input value="Start" type="submit" />
      </form>
    </div>
  );
}
export default Start;
