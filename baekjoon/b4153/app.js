const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = inputArr => {
  for (let i = 0; i < inputArr.length - 1; i++) {
    const arr = inputArr[i].split(' ').sort((a, b) => a - b);
    if (arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2) console.log('right');
    else console.log('wrong');
  }
};

solution(input);
