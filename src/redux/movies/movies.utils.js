export const getSingleDecimalValue = (num) => {
  return (Math.round(num * 10) / 10).toFixed(1);
};

export const isCollectionsEmpty = (data) => {
  return Array.isArray(data) && data.length === 0;
};
