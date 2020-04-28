import WatchlistActionTypes from "./watchlist.types";

export const addItemToWatchlist = (item) => ({
  type: WatchlistActionTypes.ADD_ITEM_TO_WATCHLIST,
  item,
});
