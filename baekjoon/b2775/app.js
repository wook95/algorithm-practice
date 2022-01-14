const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((v)=>+v);

const testCase = input[0];
input = input.splice(1,input.length-1);


//console.log(input);


let recur = function(i,j){
  if(j===1){
    return 1;
  }
  if(i===0){
    return j
  }
  return recur(i-1,j) + recur(i,j-1);
}


for(let i=0; i<testCase; i++){
  console.log(recur(input[2*i],input[2*i+1]));
}

