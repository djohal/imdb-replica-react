export const addItemIdToWatchlist = (watchlistIds, watchlistIdToAdd) => {
  if (!watchlistIds.length) {
    watchlistIds = [watchlistIdToAdd];
  }

  if (!watchlistIds.includes(watchlistIdToAdd)) {
    watchlistIds.push(watchlistIdToAdd);
  }

  return [...watchlistIds];
};
