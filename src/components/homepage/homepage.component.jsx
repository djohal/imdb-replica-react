import React from "react";

import NowPlaying from "../now-playing/now-playing.component";
import FeaturedToday from "../featured-today/featured-today.component";
import FanFavorites from "../fan-favorites/fan-favorites.component";

function HomePage() {
  return (
    <div className="homepage">
      <NowPlaying />
      <FeaturedToday />
      <FanFavorites />
    </div>
  );
}

export default HomePage;
