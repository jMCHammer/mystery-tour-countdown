import React from "react";

import "./styles.scss";
const passphrases = [
  {
    "all the roast beef": "Matt",
    mysupersecretadminpassword: "Admin"
  }
];

function signin(e, setter) {
  var text = e.target.value;
  if (passphrases[0].hasOwnProperty(text)) {
    setter(passphrases[0][text]);
  }
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
        placeholder="Enter the secret passphrase"
      />
    </div>
  );
}

export default UserPrompt;
