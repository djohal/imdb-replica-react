import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchReducers from "./search/search.reducers";
import moviesReducers from "./movies/movies.reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  search: searchReducers,
  movies: moviesReducers
});

export default persistReducer(persistConfig, rootReducer);
