import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import nowPlayingReducer from "./movies/reducers/now-playing.reducers";
import featuredTodayReducer from "./movies/reducers/featured-today.reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  nowPlaying: nowPlayingReducer,
  featuredToday: featuredTodayReducer,
});

export default persistReducer(persistConfig, rootReducer);
