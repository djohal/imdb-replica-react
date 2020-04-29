export const addItem = (watchlistItems, watchlistItemToAdd) => {
  if (!!watchlistItems && !watchlistItems.length) {
    watchlistItemToAdd.selected = true;
    watchlistItems = [watchlistItemToAdd];
  }

  if (!watchlistItems.includes(watchlistItemToAdd)) {
    watchlistItemToAdd.selected = true;
    watchlistItems.push(watchlistItemToAdd);
  }

  return [...watchlistItems];
};

export const removeItem = (watchlistItems, watchlistItemToRemove) => {
  if (!!watchlistItems && !watchlistItems.length) {
    return watchlistItems;
  }

  if (watchlistItems.includes(watchlistItemToRemove)) {
    return watchlistItems.filter(
      (item) => item.id !== watchlistItemToRemove.id
    );
  }

  return [...watchlistItems];
};
