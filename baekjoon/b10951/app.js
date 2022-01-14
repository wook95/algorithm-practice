const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



for(let i=0; i<input.length;i++){

const[x,y] = input[i].toString().split(' ').map((item)=> +item);


if(x===0 && y===0) break;
console.log(x+y);


}


