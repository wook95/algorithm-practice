const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();



let croatia = ['c=','c-','dz=','d-','lj','nj','s=','z='];


for(let alp of croatia){
  input =  input.split(alp).join('a');
}

console.log(input.length);