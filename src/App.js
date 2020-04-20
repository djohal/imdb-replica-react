import React from "react";
import "./App.scss";

import Header from "./components/layout/header/header.component";
import NowPlaying from "./components/now-playing/now-playing.component";
import FeaturedToday from "./components/featured-today/featured-today.component";
import FanFavorites from "./components/fan-favorites/fan-favorites.component";
import Footer from "./components/layout/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <NowPlaying />
      <FeaturedToday />
      <FanFavorites />
      <Footer />
    </div>
  );
}

export default App;
