import MoviesActionType from "./movies.types";

export const fetchNowPlayingStart = () => ({
  type: MoviesActionType.FETCH_NOW_PLAYING_START,
});

export const fetchNowPlayingSuccess = (payload) => ({
  type: MoviesActionType.FETCH_NOW_PLAYING_SUCCESS,
  payload,
});

export const fetchNowPlayingFailure = (error) => ({
  type: MoviesActionType.FETCH_NOW_PLAYING_FAILURE,
  payload: error,
});

export const fetchFeaturedTodayStart = () => ({
  type: MoviesActionType.FETCH_FEATURED_TODAY_START,
});

export const fetchFeaturedTodaySuccess = (payload) => ({
  type: MoviesActionType.FETCH_FEATURED_TODAY_SUCCESS,
  payload,
});

export const fetchFeaturedTodayFailure = (error) => ({
  type: MoviesActionType.FETCH_FEATURED_TODAY_FAILURE,
  payload: error,
});

export const fetchFanFavoritesStart = () => ({
  type: MoviesActionType.FETCH_FAN_FAVORITES_START,
});

export const fetchFanFavoritesSuccess = (payload) => ({
  type: MoviesActionType.FETCH_FAN_FAVORITES_SUCCESS,
  payload,
});

export const fetchFanFavoritesFailure = (error) => ({
  type: MoviesActionType.FETCH_FAN_FAVORITES_FAILURE,
  payload: error,
});

export const fetchExternalIdStart = () => ({
  type: MoviesActionType.FETCH_EXTERNAL_ID_START,
});

export const fetchExternalIdSuccess = (payload) => ({
  type: MoviesActionType.FETCH_EXTERNAL_ID_SUCCESS,
  payload,
});

export const fetchExternalIdFailure = (error) => ({
  type: MoviesActionType.FETCH_EXTERNAL_ID_FAILURE,
  payload: error,
});

export const searchInput = (input) => ({
  type: MoviesActionType.SEARCH_INPUT,
  payload: input,
});

export const fetchSearchMovieStart = () => ({
  type: MoviesActionType.FETCH_SEARCH_MOVIE_START,
});

export const fetchSearchMovieSuccess = (payload) => ({
  type: MoviesActionType.FETCH_SEARCH_MOVIE_SUCCESS,
  payload,
});

export const fetchSearchMovieFailure = (error) => ({
  type: MoviesActionType.FETCH_SEARCH_MOVIE_FAILURE,
  payload: error,
});

export const clearSearchEntry = () => ({
  type: MoviesActionType.CLEAR_SEARCH_ENTRY,
});

export const clearSearchCollections = () => ({
  type: MoviesActionType.CLEAR_SEARCH_COLLECTIONS,
});
