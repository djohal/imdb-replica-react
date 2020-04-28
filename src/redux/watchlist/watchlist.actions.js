import WatchlistActionTypes from "./watchlist.types";

export const addItemIdToWatchlist = (id) => ({
  type: WatchlistActionTypes.ADD_ITEM_ID_TO_WATCHLIST,
  id,
});
