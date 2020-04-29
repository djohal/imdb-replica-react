import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

import WatchlistItem from "../../components/watchlist-item/watchlist-item.component";
import { selectWatchlistItems } from "../../redux/watchlist/watchlist.selectors";

const WatchlistPage = () => {
  const watchlistItems = useSelector(selectWatchlistItems);

  return (
    <div className="watchlist-page">
      <Container>
        <h2>Your Watchlist</h2>
        <div className="watchlist-items">
          {watchlistItems.map((item, i) => (
            <WatchlistItem key={i} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WatchlistPage;
