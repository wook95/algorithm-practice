const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((v)=>+v);



function solution(N){
  if(parseInt(N%5)===0){
    return N/5;
  }
  else if(((N%5)%3)===0){
    return parseInt(N/5)+ ((N%5)/3);
  }else if((N-5)%3===0){
    return (N-5)/3+1;
  }else if(N%3===0){
    return N/3;
  }else return -1;
}

console.log(solution(input[0]));