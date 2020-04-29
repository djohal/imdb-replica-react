export const addItem = (watchlistItems, watchlistItemToAdd) => {
  if (!!watchlistItems && !watchlistItems.length) {
    watchlistItems = [watchlistItemToAdd];
  }

  if (!watchlistItems.includes(watchlistItemToAdd)) {
    watchlistItems.push(watchlistItemToAdd);
  }

  return [...watchlistItems];
};

export const removeItem = (watchlistItems, watchlistItemToRemove) => {
  if (!!watchlistItems && !watchlistItems.length) {
    return watchlistItems;
  }

  if (watchlistItems.includes(watchlistItemToRemove)) {
    return watchlistItems.filter((item) => item !== watchlistItemToRemove);
  }

  return [...watchlistItems];
};
