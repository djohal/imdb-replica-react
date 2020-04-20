export const transformFeaturedTodayCollection = (collection) => {
  let mergedArray = [];
  let j = 0;
  for (let i = 0; i < collection.length; i++) {
    if (j < collection.length) {
      mergedArray[i] = {
        0: collection[j],
        1: collection[j + 1],
      };
      j += 2;
    }
  }
  return mergedArray;
};
