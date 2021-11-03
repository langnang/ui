export const arrayFindIndex = (array, callback, thisArg) => {
  for (let key in array) {
    if (callback(array[key], key, array)) {
      return key;
    }
  }
  return -1;
};
