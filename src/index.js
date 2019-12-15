import React, { useState } from "react";
import ReactDOM from "react-dom";

import UserPrompt from "./UserPrompt/UserPrompt";
import Player from "./Player/Player";
import UserContext from "./UserContext";
import "./styles.css";
import Proximity from "./Proximity/Proximity";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <div className="App-header">
        <UserContext.Provider value={user}>
          <UserPrompt user={user} setUser={setUser} />
          <Player />
          {/* <Proximity /> */}
        </UserContext.Provider>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
