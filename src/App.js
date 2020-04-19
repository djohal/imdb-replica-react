import React from "react";
import "./App.scss";

import Header from "./components/layout/header/header.component";
import NowPlaying from "./components/now-playing/now-playing.component";
import FeaturedToday from "./components/featured-today/featured-today.component";

function App() {
  return (
    <div className="App">
      <Header />
      <NowPlaying />
      <FeaturedToday />
    </div>
  );
}

export default App;
