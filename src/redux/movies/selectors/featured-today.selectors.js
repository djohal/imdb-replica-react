import { createSelector } from "reselect";

const selectMovies = (state) => state.featuredToday;

export const selectMoviesCollection = createSelector(
  [selectMovies],
  (featuredToday) => featuredToday.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectMovies],
  (featuredToday) => featuredToday.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectMovies],
  (featuredToday) => !!featuredToday.collections
);
