const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const solution = num => {
  console.log((Math.PI * num * num).toFixed(6));
  console.log((2 * num * num).toFixed(6));
};

solution(input);
