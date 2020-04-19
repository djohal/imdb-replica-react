import React from "react";
import "./App.scss";

import Header from "./components/layout/header/header.component";
import NowPlaying from "./components/now-playing/now-playing.component";

function App() {
  return (
    <div className="App">
      <Header />
      <NowPlaying />
    </div>
  );
}

export default App;
