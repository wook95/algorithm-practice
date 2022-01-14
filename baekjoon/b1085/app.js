const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(item => +item);

const solution = nums => {
  const calculatedNums = [
    nums[0],
    nums[1],
    nums[2] - nums[0],
    nums[3] - nums[1],
  ];
  console.log(Math.min(...calculatedNums));
};

solution(input);
