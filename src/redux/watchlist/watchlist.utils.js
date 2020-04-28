export const addItem = (watchlistItems, watchlistItemToAdd) => {
  if (!!watchlistItems && !watchlistItems.length) {
    watchlistItems = [watchlistItemToAdd];
  }

  if (!watchlistItems.includes(watchlistItemToAdd)) {
    watchlistItems.push(watchlistItemToAdd);
  }

  return [...watchlistItems];
};
