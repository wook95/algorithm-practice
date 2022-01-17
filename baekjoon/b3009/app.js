const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(item => item.split(' '));

const reverseArr = doubleArray => {
  const newArr = Array.from(Array(doubleArray[0].length), () =>
    Array(doubleArray.length)
  );

  for (let i = 0; i < doubleArray[0].length; i++) {
    for (let j = 0; j < doubleArray.length; j++) {
      newArr[i][j] = doubleArray[j][i];
    }
  }
  return newArr;
};

const solution = input => {
  const answer = reverseArr(input).map(v =>
    v.filter((val, _, arr) => {
      if (arr.indexOf(val) !== arr.lastIndexOf(val)) return null;
      else return val;
    })
  );
  console.log(answer[0][0], answer[1][0]);
};

solution(input);
