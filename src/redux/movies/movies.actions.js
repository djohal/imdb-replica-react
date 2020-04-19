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
