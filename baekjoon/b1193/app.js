const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((v)=>+v);

// console.log(input);

function recur(n){
  if(n===1) return 1;
  return recur(n-1)+n;
}

let num=1;
while(recur(num)<input[0]){
  ++num;
}

// console.log(num);
// console.log(recur(num) - input[0]);

let Y = (num) - (recur(num) - input[0]);
let X = (num+1) - Y;

if(num%2===1){
console.log(`${X}/${Y}`)}else{
console.log(`${Y}/${X}`) 
}