import React, { useEffect, useState } from "react";

import "./styles.scss";

function signin(e, setter, passphrases) {
  var text = e.target.value;
  //todo fix
  if (passphrases[0].hasOwnProperty(text)) {
    setter(passphrases[0][text]);
  }
}

function UserPrompt(props) {
  const [passphrases, setPassphrases] = useState([{}]);

  async function fetchData() {
    const res = await fetch("https://mystery-backend.herokuapp.com/people");
    res
      .json()
      .then(res => setPassphrases(res))
      .catch(() => console.log("Couldn't find users"));
  }

  useEffect(() => {
    fetchData();
  });
  // todo store user in local storage?
  if (props.user != null) {
    return null;
  }
  return (
    <div>
      <input
        onChange={e => signin(e, props.setUser, passphrases)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default UserPrompt;
