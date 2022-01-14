const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((v)=>+v);


function sol(A,B,V){
  

  return Math.ceil((V-A)/(A-B))+1;
}

console.log(sol(input[0],input[1],input[2]));


