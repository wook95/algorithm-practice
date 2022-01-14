const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let solution = function(input){
  let num1 = BigInt(input[0]);
  let num2 = BigInt(input[1]);

  let answer = num1+num2;
  answer = answer+"";
  

  return answer;
}

console.log(solution(input));