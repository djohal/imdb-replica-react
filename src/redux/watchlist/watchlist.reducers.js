import WatchlistActionTypes from "./watchlist.types";
import { addItem } from "./watchlist.utils";

const INITIAL_STATE = {
  watchlistItems: [],
};

const watchlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WatchlistActionTypes.ADD_ITEM_TO_WATCHLIST:
      return {
        ...state,
        watchlistItems: addItem(state.watchlistItems, action.item),
      };

    default:
      return state;
  }
};

export default watchlistReducer;
