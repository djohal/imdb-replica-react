import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import MovieReducer from "./movies/movies.reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  movies: MovieReducer,
});

export default persistReducer(persistConfig, rootReducer);
