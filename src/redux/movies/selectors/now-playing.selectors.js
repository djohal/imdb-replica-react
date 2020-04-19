import { createSelector } from "reselect";

const selectMovies = (state) => state.nowPlaying;

export const selectMoviesCollection = createSelector(
  [selectMovies],
  (nowPlaying) => nowPlaying.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectMovies],
  (nowPlaying) => nowPlaying.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectMovies],
  (nowPlaying) => !!nowPlaying.collections
);
