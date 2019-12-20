import React, { useEffect, useState } from "react";

import "./styles.scss";

function signin(e, setter) {
  var name = e.target.value;
  fetchData(setter, name);
}
async function fetchData(setter, name) {
  const res = await fetch(
    "https://mystery-backend.herokuapp.com/people?name=" + name
  );
  res
    .json()
    .then(res => setter(res))
    .catch(() => console.log("Couldn't find user"));
}

function UserPrompt(props) {
  // todo store user in local storage?
  if (props.user != null) {
    return null;
  }
  return (
    <div>
      <input
        onChange={e => signin(e, props.setUser)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default UserPrompt;
