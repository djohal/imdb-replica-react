import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const selectMoviesCollection = createSelector(
  [selectMovies],
  (movies) => movies.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectMovies],
  (movies) => movies.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectMovies],
  (movies) => !!movies.collections
);
