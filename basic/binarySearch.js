const searchBinary = (array, target) => {
  let high = array.length - 1;
  let low = 0;
  let mid = Math.floor(high / 2);

  while (target !== array[mid]) {
    if (target > mid) {
      low = mid + 1;
      mid = Math.floor(high + low / 2);
    } else {
      high = mid - 1;
      mid = Math.floor(high + low / 2);
    }
  }
  return array[mid];
};

console.log(searchBinary([0, 1, 2, 3, 4, 5, 6], 2));
