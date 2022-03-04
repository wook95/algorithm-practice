const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

const getFibonacci = num => {
  if (num === 0) return 0;
  else if (num === 1) return 1;

  return getFibonacci(num - 1) + getFibonacci(num - 2);
};

console.log(getFibonacci(+input));
