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