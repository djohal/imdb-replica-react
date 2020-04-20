import { createSelector } from "reselect";

const selectMovies = (state) => state.fanFavorites;

export const selectMoviesCollection = createSelector(
  [selectMovies],
  (fanFavorites) => fanFavorites.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectMovies],
  (fanFavorites) => fanFavorites.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectMovies],
  (fanFavorites) => !!fanFavorites.collections
);
