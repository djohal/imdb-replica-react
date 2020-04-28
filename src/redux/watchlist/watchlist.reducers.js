import WatchlistActionTypes from "./watchlist.types";
import { addItemIdToWatchlist } from "./watchlist.utils";

const INITIAL_STATE = {
  watchlistItemIds: [],
};

const watchlistReducer = (state = INITIAL_STATE, action) => {
  console.log(action.id);

  switch (action.type) {
    case WatchlistActionTypes.ADD_ITEM_ID_TO_WATCHLIST:
      return {
        ...state,
        watchlistItemIds: addItemIdToWatchlist(
          state.watchlistItemIds,
          action.id
        ),
      };

    default:
      return state;
  }
};

export default watchlistReducer;
