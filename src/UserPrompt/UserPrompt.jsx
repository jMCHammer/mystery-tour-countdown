import React, { useEffect, useState } from "react";

import "./styles.scss";
import "bootstrap/scss/bootstrap.scss";

function signin(e, setter) {
  var name = e;

  fetchData(setter, name);
}
async function fetchData(setter, name) {
  const res = await fetch(
    "https://mystery-backend.herokuapp.com/people?name=" + name
  );
  res
    .json()
    .then(res => setter(res[0]))
    .catch(() => console.log("Couldn't find user"));
}

function UserPrompt(props) {
  // todo store user in local storage?
  const [fade, setFade] = useState("fadeMeIn");
  const [val, setVal] = useState();
  if (props.user != null) {
    return null;
  }
  return (
    <div className="container">
      <div className={fade} className="input-group mb-3">
        <input
          className="form-control"
          onChange={e => setVal(e.target.value)}
          placeholder="Enter your name"
        />
        <button
          className="btn btn-outline-secondary btn-light"
          type="button"
          onClick={() => {
            signin(val, props.setUser);
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default UserPrompt;
