const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const pec = n => {
  if (n === 0) return 1;
  return pec(n - 1) * n;
};

console.log(pec(input));
