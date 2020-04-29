import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";

import WatchlistItem from "../../components/watchlist-item/watchlist-item.component";
import { selectWatchlistItems } from "../../redux/watchlist/watchlist.selectors";

const WatchlistPage = () => {
  const watchlistItems = useSelector(selectWatchlistItems);
  const history = useHistory();

  return (
    <div className="watchlist-page">
      <Container>
        <h2>Your Watchlist</h2>
        <div className="watchlist-items">
          {watchlistItems.length
            ? watchlistItems.map((item, i) => (
                <WatchlistItem key={i} item={item} />
              ))
            : history.push("/")}
        </div>
      </Container>
    </div>
  );
};

export default WatchlistPage;
