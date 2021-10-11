import React, { useEffect, useState } from "react";

var nodeEnv = process.env.NODE_ENV;

function signin(e, setter) {
  var name = e;

  //fetchData(setter, name);
  setter(name);
}
async function fetchData(setter, name) {
  var url = "https://mystery-backend.herokuapp.com";
  if (nodeEnv == "development") {
    url = "http://localhost:8080";
  }

  const res = await fetch(url + "/people?name=" + name);
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
      <form
        onSubmit={event => {
          event.preventDefault();
          signin(val, props.setUser);
        }}
        className={fade}
        className="input-group mb-3"
      >
        <input
          className="form-control"
          onChange={e => setVal(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          value="Sign in"
          className="btn btn-outline-secondary btn-light"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default UserPrompt;
