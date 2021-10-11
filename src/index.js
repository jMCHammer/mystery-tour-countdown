import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import UserPrompt from "./UserPrompt";
import Player from "./Player";
import UserContext from "./UserContext";
import "./styles.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <div className="App-header">
        <Player />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
