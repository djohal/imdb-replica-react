import MoviesActionType from "../movies.types";

const INITIAL_STATE = {
  searchInput: "",
  collections: null,
  isFetching: false,
};

const searchMovieReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionType.SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case MoviesActionType.FETCH_SEARCH_MOVIE_START:
      return {
        ...state,
        isFetching: true,
      };

    case MoviesActionType.FETCH_SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case MoviesActionType.FETCH_SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default searchMovieReducers;
