const sortByBubble = array => {
  const target = [...array];
  let isSorted = false;
  let unsortedUntilIndex = array.length - 1;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (target[i] > target[i + 1]) {
        [target[i], target[i + 1]] = [target[i + 1], target[i]];
        isSorted = false;
      }
    }
    unsortedUntilIndex -= 1;
  }

  return target;
};

console.log(sortByBubble([9, 1, 6, 3, 5]));
