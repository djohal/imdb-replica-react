import React from "react";
import "./App.scss";

import Header from "./components/layout/header/header.component";
import MoviesCarousel from "./components/carousel/carousel.component";

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesCarousel />
    </div>
  );
}

export default App;
